import mongoose from 'mongoose';
import hiveSchema from './../schema/hive';

const hiveModel = mongoose.model('hive', hiveSchema);

export default hiveModel;
