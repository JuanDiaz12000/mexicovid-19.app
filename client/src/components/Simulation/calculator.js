import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import LaunchIcon from '@material-ui/icons/Launch';
import * as colors from '../../constants/colors';

const SimulationUncertainty = ({ classes }) => {
    document.title = "Prospectiva | MexiCOVID";

    return (
        <React.Fragment>
            <section className={classes.section}>
                <Typography className={classes.h2} variant={'h2'}>Roberto Duran</Typography>
                <p className={classes.textcontainer}>Calculadora de PIB</p>
                <section className={classes.bottominfocontainer} >
                    <div className={classes.writterscontainer}>
                        <p className={classes.textcontainer}>Fernando Gómez, doctor en políticas públicas por la Escuela de Gobierno y Transformación Pública del Tecnológico de Monterrey <a href="https://twitter.com/fgmzz" target="_blank" className={classes.twitterclass}> @fgmzz</a></p>
                    </div>
                    <div className={classes.buttonPlace}>
                        <Button target="_blank" href="/reactivacion-economica" className={classes.button} color="inherit">Gráfica<LaunchIcon className={classes.icon} /></Button>
                    </div>
                </section>
            </section>
        </React.Fragment>
    );
}

const styles = () => ({
    h2: {
        fontSize: '24px',
        marginBottom: '10px',
        marginTop: '10px',
    },

    header: {
        borderBottom: `1px solid ${colors.BLACK}`,
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between',
    },

    label: {
        color: colors.GRAY_LIGHT
    },

    section: {
        margin: '20px 0px',
        borderRadius: '5px',
        padding: '20px',
        backgroundColor: colors.GRAY,
    },

    chart: {
        height: '600px',
        width: '100%',
    },

    button: {
        borderRadius: '0px',
        justifyContent: 'end'
    },

    buttonPlace: {
        color: 'black',
        minHeight: '40px',
        textAlign: 'right',
        alignSelf: 'flex-end',
    },

    icon: {
        marginLeft: '5px'
    },

    selector: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },

    chipContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: '5px',
        },
    },

    chartatyle: {
        paddingLeft: '50px',
        paddingRight: '60px',
        paddingBottom: '50px'
    },

    textcontainer: {
        textAlign: 'justify',
    },

    writterscontainer: {
        fontSize: '10px',
        width: '90%',
        alignSelf: 'flex-end',
        lineHeight: '16px !important',
    },


    bottominfocontainer: {
        display: 'flex',
        marginTop: '50px',
    },

    twitterclass: {
        fontWeight: '700',
        fontSize: '10px'
    },

    [`@media (max-width: ${1000}px)`]: {

    },
});

export default withStyles(styles)(SimulationUncertainty);