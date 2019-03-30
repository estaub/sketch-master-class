import * as React from 'react'
import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/styles'
import { BlueBox } from './blueBox'


const beige = '#FFDFA6'
const useStyles = makeStyles((theme: Theme) => createStyles({
    midSection: {
        width      : '100%',
        height     : 'calc(100% - 316px - 91px)',
        paddingLeft: 39
    },
    head      : {
        padding      : '30px 0 30px 0',
        color        : '#626A7F',
        fontSize     : 12,
        fontWeight   : 600,
        letterSpacing: 3,
    },
    broaderBox: {
        width           : 311,
        height          : 81,
        backgroundImage : 'url("./smc/Broader motivation img.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize  : 'cover',
        position        : 'relative',
        padding   : '0 25px 0 25px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    broader: {
        color     : '#626A7F',
        fontSize  : 17,
        fontWeight: 600,
    },
    play: {},
    gotBox    : {
        background: '#FFF8EE',
        height    : 142,
        width     : 311,
        textAlign : 'center',
        color     : '#626A7F',
        fontSize  : 13,
        fontWeight: 600,
        padding   : '21px 0 21px 0',
    },
    super     : {
        lineHeight   : '23px',
        width        : 262,
        display      : 'inline-block',
        letterSpacing: '.5'
    },
    gotitblock: {
        paddingTop   : 36,
    },
    gotit     : {
        fontWeight   : 600,
        letterSpacing: 2.27,
        display      : 'inline-block'
    }

}))


export function MidSection(props: {}) {
    const c = useStyles()
    return (
        <div className={c.midSection}>
            <div className={c.head}>EVERYDAY HEADSPACE</div>
            <div className={c.broaderBox}>
                <div className={c.broader}>Broader motivation</div>
                <div className={c.play}><img src='./smc/Play button.png'/></div>
            </div>
            <div className={c.head}>MINIS</div>
            <div className={c.gotBox}>
                <div className={c.super}>
                    Super-short exercises you can do any time. Great for busy schedules.
                </div>
                <div className={c.gotitblock}>
                    <div className={c.gotit}>GOT IT</div>
                </div>
            </div>
        </div>
    )
}


