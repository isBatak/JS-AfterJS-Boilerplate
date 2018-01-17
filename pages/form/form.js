const InnerForm = ({
  values,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
  touched,
}) => (
  <form onSubmit={handleSubmit}>
    <input
      name="email"
      onBlur={handleBlur}
      onChange={handleChange}
      placeholder="Email"
      type="text"
      value={values.email}
    /> <br />
    {touched.email && errors.email && <div>{errors.email}</div>}
    <input
      name="password"
      onBlur={handleBlur}
      onChange={handleChange}
      placeholder="Password"
      type="password"
      value={values.password}
    /> <br />
    {touched.password && errors.password && <div>{errors.password}</div>}
    <button type="submit">
      Submit
    </button>
  </form>
);

export default InnerForm;
