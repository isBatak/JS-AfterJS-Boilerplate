import React from 'react';
import {storiesOf} from '@storybook/react';
import Error from './';

storiesOf('Error', module)
  .add('not found', () => (
    <Error code="404">Not found</Error>
  ))
  .add('forbidden', () => (
    <Error code="403">Forbidden</Error>
  ));
