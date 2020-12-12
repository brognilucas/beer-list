import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Container, Typography, Box } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Input, InputLabel } from "@material-ui/core";
import { MyBeers, getRandomId } from "../../context/MyBeers";
import { useHistory } from "react-router-dom";
import service from "../../services";

const validationSchema = yup.object({
  name: yup
    .string("Enter the name of beer")
    .required("Name of the beer is required"),
  description: yup
    .string("Enter the description of beer")
    .required("Description of beer is requried"),
});

const CreateBeer = ({ submit , categories }) => {
 
  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      style: {
        name: "",
        description: "",
        category: {
          name: "",
        },
      },
      labels: {
        icon: "",
      },
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      submit(values);
    }
  });

  return (
    <Container>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Typography align="left" variant="h5" color="textSecondary">
          Create Your Beer
        </Typography>
      </Box>

      <Typography
        color="textSecondary"
        variant="h6"
        align="left"
        style={{ marginTop: "1em" }}
      >
        Beer Info
      </Typography>
      <form style={{ marginTop: "2em" }} onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          margin="dense"
          variant="outlined"
        />
        <TextField
          fullWidth
          id="description"
          name="description"
          label="Description"
          type="text"
          multiline={true}
          rows={4}
          margin="dense"
          value={formik.values.description}
          onChange={formik.handleChange}
          variant="outlined"
          error={
            formik.touched.description && Boolean(formik.errors.description)
          }
          helperText={formik.touched.description && formik.errors.description}
        />

        <Typography
          color="textSecondary"
          variant="h6"
          display="block"
          align="left"
          style={{ marginTop: "1em" }}
        >
          Beer Style
        </Typography>
        <TextField
          fullWidth
          name="style.name"
          label="Style"
          variant="outlined"
          margin="dense"
          type="text"
          value={formik.values.style.name}
          onChange={formik.handleChange}
        />
        <TextField
          fullWidth
          id="styleDescription"
          name="style.description"
          label="Description"
          type="text"
          multiline={true}
          rows={4}
          margin="dense"
          value={formik.values.style.description}
          onChange={formik.handleChange}
          variant="outlined"
        />

        <Autocomplete
          id="style"
          options={categories}
          getOptionLabel={(option) => option.name || ""}
          name="style.category.name"
          onChange={(e, value) => {
            formik.setFieldValue("style.category.name", value.name);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              fullWidth
              id="category"
              name="style.category.name"
              label="Category"
              type="text"
              margin="dense"
              value={formik.values.style.category.name}
              onChange={formik.handleChange}
              variant="outlined"
            />
          )}
        />

        <Input
          margin="dense"
          variant="outlined"
          id="import-button"
          name="style.labels.icon"
          inputProps={{
            accept: "image/*",
          }}
          onChange={(e) => {
            const file = e.target.files[0];
            getBase64(file).then((base64) => {
              console.debug("file stored", base64);

              formik.setFieldValue("labels.icon", base64);
            });
          }}
          style={{ display: "block" }}
          type="file"
        />

        <Button
          style={{
            marginTop: "2em",
          }}
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default CreateBeer;
