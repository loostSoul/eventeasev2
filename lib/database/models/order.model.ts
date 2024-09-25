import { Schema, model, models, Document } from 'mongoose';

// Define the interface for the Order
export interface IOrder extends Document {
  createdAt: Date;
  stripeId: string;
  totalAmount: string;
  event: Schema.Types.ObjectId; // Store the reference as ObjectId
  buyer: Schema.Types.ObjectId; // Store the reference as ObjectId
}

// Define the schema for the Order
const OrderSchema = new Schema<IOrder>({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  stripeId: {
    type: String,
    required: true,
    unique: true,
  },
  totalAmount: {
    type: String,
    required: true, // Optionally make this required
  },
  event: {
    type: Schema.Types.ObjectId, // Type is correctly set here
    ref: 'Event', // Reference to the Event model
    required: true,
  },
  buyer: {
    type: Schema.Types.ObjectId, // Type is correctly set here
    ref: 'User', // Reference to the User model
    required: true,
  },
});

// Define the model, ensuring it's only created once
const Order = models.Order || model<IOrder>('Order', OrderSchema);

// Export the model
export default Order;
