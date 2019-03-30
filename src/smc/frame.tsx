import * as React from 'react'
import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/styles'
import { BlueBox } from './blueBox'
import { Bottom } from './Bottom'
import { MidSection } from './MidSection'


const beige = '#FFDFA6'
const useStyles = makeStyles((theme: Theme) => createStyles({
    frame     : {
        fontFamily: 'HelveticaNeue',
        width     : '100%',
        maxWidth  : 400,
        minWidth  : 300,
        height    : '100%',
        maxHeight : 812,
        minHeight : 600,
        position  : 'absolute',
        background: 'white',
        filter    : 'drop-shadow(8px 8px 8px grey)',
    },
    innerFrame: {
        position: 'absolute',
        height  : '100%',
        width   : '100%',
    },

}))


export function Framee(props: {}) {
    const classes = useStyles()
    return <div className={classes.frame}>
        <div className={classes.innerFrame}>
            <BlueBox />
            <MidSection />
            <Bottom />
        </div>
    </div>
}
