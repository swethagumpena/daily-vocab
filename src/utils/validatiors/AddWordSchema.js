import * as yup from 'yup';

const AddWordSchema = yup.object().shape({
  word: yup
    .string()
    .trim()
    .required('required'),
  sentence: yup
    .string()
    .trim(),
});

export default AddWordSchema;
