import FormData  from '../models/formModel.js'

export const createFormData = async (req, res) => {
    try {
        const formData = new FormData(req.body);
        await formData.save();
        res.status(201).send(formData);
    } catch (error) {
        res.status(400).send(error);
    }
};
