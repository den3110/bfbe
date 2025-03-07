import api from '../../ApiConfig';
import { Apis } from '../../../config';
import { NotificationManager } from 'react-notifications';

const getAllOrderList = async (data) => {
    try {
        let result = await api.get(Apis.GetAllOrderDetails, {params: {...data}});
        if (result.errors) {
            NotificationManager.error(result.errors);
            return null;
        }
        return result.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

const getOrderStatusUpdate = async (data) => {
    try {
        let result = await api.post(Apis.GetOrderStatusUpdate,data);
        if (result.errors) {
            NotificationManager.error(result.errors);
            return null;
        }
        return result.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export default {
    getAllOrderList,
    getOrderStatusUpdate,
};