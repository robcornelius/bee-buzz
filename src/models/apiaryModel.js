import mongoose from 'mongoose';
import apiarySchema from './../schema/apiary';

const apiarySchema = mongoose.model('apiary', apiarySchema);

export default apiarySchema;
