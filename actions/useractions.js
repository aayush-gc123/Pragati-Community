"use server";

import connectDB from "@/db/connectDb";
import User from "@/models/User";
import Payment from "@/models/Payment";

export const initiate = async (amount, to_username, paymentform) => {
    await connectDB();

    let user = await User.findOne({ username: to_username });

    if (!user) {
        return { error: 1, message: "User not found" };
    }

    const payment = await Payment.create({
        oid: `order_${new Date().getTime()}`,
        amount: amount / 100,
        to_user: to_username,
        name: paymentform.name,
        message: paymentform.message,
        done: false
    });

    return payment;
};

export const fetchUser = async (username) => {
    await connectDB();
    let u = await User.findOne({ username: username });
    let user = u?.toObject({ flattenObjectIds: true });
    return user;
};

export const fetchpayments = async (username) => {
    await connectDB();

    let p = await Payment.find({ to_user: username, done: true }).sort({ amount: -1 }).limit(10).lean();
    return p;
};

export const updateProfile = async (data, oldusername, oldemail) => {
    await connectDB();
    let ndata = Object.fromEntries(data);

    let newusername = ndata.username;
    ndata.username = oldusername;

    await User.updateOne({ username: oldusername }, ndata);

    if (oldusername != newusername || oldemail != ndata.email) {
        return { error: 1 };
    } else {
        return { error: 0 };
    }
};

export const fetchSearchResults = async (searchString) => {
    await connectDB();

    if (searchString == "") {
        return await User.find({}).lean();
    }

    const usersWithPayments = await User.aggregate([
        {
            $match: {
                $or: [
                    { username: { $regex: searchString, $options: "i" } },
                    { name: { $regex: searchString, $options: "i" } },
                ]
            }
        },
        {
            $lookup: {
                from: "payments",
                localField: "username",
                foreignField: "to_user",
                as: "paymentsReceived"
            }
        },
        {
            $addFields: {
                filteredPayments: {
                    $filter: {
                        input: "$paymentsReceived",
                        as: "payment",
                        cond: { $eq: ["$$payment.done", true] }
                    }
                },
                totalPaymentsReceived: {
                    $size: {
                        $filter: {
                            input: "$paymentsReceived",
                            as: "payment",
                            cond: { $eq: ["$$payment.done", true] }
                        }
                    }
                }
            }
        },
        {
            $sort: { totalPaymentsReceived: -1 }
        }
    ]);

    const flattenedResult = usersWithPayments.map(user => ({
        ...user,
        totalPaymentsReceived: user.totalPaymentsReceived
    }));

    return flattenedResult;
};
