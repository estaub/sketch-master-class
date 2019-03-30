import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

//@ts-ignore
import { Button, Welcome } from '@storybook/react/demo';
import { Framee } from './frame'


storiesOf('Indexx/Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Indexx/Button', module)
    .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
    .add('with some emoji', () => (
        <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
        </Button>
    ));


storiesOf("HeadspaceSpeedProject", module).add(
    "frame", ()=><Framee />
)
