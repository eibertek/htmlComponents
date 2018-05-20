import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import RadioButton from '../reactSrc/components/RadioButton/RadioButton.jsx';
import Date from '../reactSrc/components/Date/Date.jsx';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import 'bootstrap/dist/css/bootstrap.css';

const stories = storiesOf('Components', module);

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs);

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);


stories
  .addDecorator(story => (
    <div style={{textAlign: 'left', margin: '20px 35px'}}>
      {story()}
    </div>
  ))
  .add('RadioButton Normal', () => <RadioButton  label="RadioButton Test" />)
  .add('With Label', () => {
    const label = text('Label', 'React RadioButton');
    const value = boolean('Value', false);
    return <RadioButton  label={label} value={value} />
  })
  .add('DatePicker Normal', () => <Date  label="DatePicker" />);
