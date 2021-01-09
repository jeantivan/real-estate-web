import TextField from "@material-ui/core/TextField";
import { useField } from "formik";

export function Input(props) {
  const [field, meta] = useField(props);

  return (
    <TextField
      error={Boolean(meta.touched && meta.error)}
      helperText={meta.touched ? meta.error : null}
      {...props}
      {...field}
    />
  );
}
