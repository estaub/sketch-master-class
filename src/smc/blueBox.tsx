import * as React from 'react'
import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/styles'


const beige = '#FFDFA6'
const useStyles = makeStyles((theme: Theme) => createStyles({
    blueBox: {
        width           : '100%',
        height          : 316,
        backgroundImage : 'url("./smc/Blue background.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize  : 'cover',
        position        : 'relative',
    },

    beigeInBlue: {
        paddingLeft: 20,
        color      : beige,
        position   : 'absolute',
        top        : 92,
    },
    statusBar  : {
        margin    : 'auto',
        paddingTop: 4,
    },
    day        : {
        fontSize: 19,
    },
    anxiety    : {
        marginTop: 24,
        fontSize : 41,
    },
    beginButton: {
        marginTop    : 24,
        background   : beige,
        color        : '#626A7F',
        fontSize     : 12,
        fontWeight: 600,
        letterSpacing: 3,
        height       : 41,
        borderRadius : 20.5,
        textAlign    : 'center',
        verticalAlign: 'middle',
        lineHeight   : '41px'
    },

    progressBarFull: {
        background   : '#FDFAFA1B',
        position: 'absolute',
        height  : 7,
        bottom: 0,
        width   : '100%',
    },
    progress       : {
        background : beige,
        width : '40%',
        height: 7
    }
}))


export function BlueBox(props: {}) {
    const classes = useStyles()
    return(
            <div className={classes.blueBox}>
                <img src='./smc/Status bar.png' className={classes.statusBar} />
                <div className={classes.beigeInBlue}>
                    <div className={classes.day}>Day 14 of 30</div>
                    <div className={classes.anxiety}>Anxiety</div>
                    <div className={classes.beginButton}>&#x25b6;&nbsp;&nbsp;BEGIN</div>
                </div>
                <div className={classes.progressBarFull}>
                    <div className={classes.progress} />
                </div>
            </div>
    )
}
