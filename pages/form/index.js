import { Formik } from 'formik';

import InnerForm from './form';
import validate from './validate';

import {Page} from '../../utils/Page';

class Form extends Page {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values, /* and other goodies*/) {
    console.log(values);
  }

  render() {
    return (
      <div>
        <h1>Formik Login</h1>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={this.handleSubmit}
          render={InnerForm}
          validate={validate}
        />
      </div>
    );
  }
}


export default Form;
