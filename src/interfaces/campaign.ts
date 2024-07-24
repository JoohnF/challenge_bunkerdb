import mongoose from "mongoose";

export interface Campaign {
    name: string;
    description: string;
    startDate: Date;
    endDate: Date;
    budget: mongoose.Types.Decimal128;
    costPerUser: mongoose.Types.Decimal128;
}
