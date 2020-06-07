import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import * as colors from '../../constants/colors';
import { MapMunicipioContext } from '../../contexts/MapMunicipioContext';
import { MapContext } from '../../contexts/MapContext';
import FiberManualRecordTwoToneIcon from '@material-ui/icons/FiberManualRecordTwoTone';
import TimelineOutlinedIcon from '@material-ui/icons/TimelineOutlined';
import Typography from '@material-ui/core/Typography';
import { numberWithCommas } from '../../Utils/numberWCommas';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import LocalHospitalRoundedIcon from '@material-ui/icons/LocalHospitalRounded';
import FormatListNumberedRoundedIcon from '@material-ui/icons/FormatListNumberedRounded';

const StateData = ( props ) => {
    const { classes, state, selectedLabel } = props;
    return (
        <React.Fragment>
        <div className={classes.casosContainer}>
            <div className={classes.casosTotales}>
                <Typography className={classes.casos} align={'center'}>
                    <FiberManualRecordTwoToneIcon className={selectedLabel == "confirmados" ? classes.dotConfirm : classes.dotDeads}/>
                    {numberWithCommas(state.totales) + " "}
                    - Totales
                </Typography>
            </div>
            <div className={classes.casosNuevos}>
                <Typography className={classes.casos} align={'center'}>
                    <FiberManualRecordTwoToneIcon className={selectedLabel == "confirmados" ? classes.dotConfirm : classes.dotDeads}/>
                    {numberWithCommas(state.nuevos) + " "}
                    - Nuevos
                </Typography>
            </div>
        </div>
        <div className={classes.datos}>
            <div className={classes.box}>
                <div>
                    <LocalHospitalRoundedIcon/>
                </div>
                <Typography className={classes.boxText} align={'center'}>
                    Pruebas
                </Typography>
                <Typography className={classes.numberBox} align={'center'}>
                    {numberWithCommas(state.pruebas)}
                </Typography>
            </div>
            <div className={classes.box}>
                <div>
                    <PeopleAltRoundedIcon/>
                </div>
                <Typography className={classes.boxText} align={'center'}>
                    Habitantes
                </Typography>
                <Typography className={classes.numberBox} align={'center'}>
                    {numberWithCommas(state.poblacion)}
                </Typography>
            </div>
        </div>
        <div className={classes.datos}>
            <div className={classes.box}>
                <div>
                    <FormatListNumberedRoundedIcon/>
                </div>
                <Typography className={classes.boxText} align={'center'}>
                    Ranking
                </Typography>
                <Typography className={classes.numberBox} align={'center'}>
                    #{state.ranking}
                </Typography>
            </div>
            <div className={classes.box}>
                <Typography className={`${classes.numberBox} ${classes.iconBox}`} align={'center'}>
                    <TimelineOutlinedIcon className={classes.icons}/>
                </Typography>
                <Typography className={`${classes.boxText} ${classes.graph}`} align={'center'}>
                    Gráfica
                </Typography>
            </div>
        </div>
        </React.Fragment>
    )
}

const MunData = ( props ) => {
    const { classes, mun } = props;
    return (
        <React.Fragment>
        <div className={classes.casosContainer}>
            <div className={classes.casosTotales}>
                <Typography className={classes.casos} align={'center'}>
                    <FiberManualRecordTwoToneIcon className={classes.dotDeads}/>
                    {numberWithCommas(3500)}
                    / Totales
                </Typography>
            </div>
            <div className={classes.casosNuevos}>
                <Typography className={classes.casos} align={'center'}>
                    <FiberManualRecordTwoToneIcon className={classes.dotDeads}/>
                    {numberWithCommas(500)}
                    / Nuevos
                </Typography>
            </div>
        </div>
        <div className={classes.datos}>
            <div className={classes.box}>
                <Typography className={classes.numberBox} align={'center'}>
                    1,500 
                </Typography>
                <Typography className={classes.boxText} align={'center'}>
                    Pruebas
                </Typography>
            </div>
            <div className={classes.box}>
                <Typography className={classes.numberBox} align={'center'}>
                    Alto
                </Typography>
                <Typography className={classes.boxText} align={'center'}>
                    Vulnerabilidad
                </Typography>
            </div>
            <div className={classes.box}>
                <Typography className={classes.numberBox} align={'center'}>
                    900,000
                </Typography>
                <Typography className={classes.boxText} align={'center'}>
                    Habitantes
                </Typography>
            </div>
        </div>
        <div className={classes.datos}>
            <div className={classes.box}>
                <Typography className={classes.numberBox} align={'center'}>
                    #3
                </Typography>
                <Typography className={classes.boxText} align={'center'}>
                    Estatal
                </Typography>
            </div>
            <div className={classes.box}>
                <Typography className={classes.numberBox} align={'center'}>
                    #3
                </Typography>
                <Typography className={classes.boxText} align={'center'}>
                    Nacional
                </Typography>
            </div>
            <div className={classes.box}>
                <Typography className={`${classes.numberBox} ${classes.iconBox}`} align={'center'}>
                    <TimelineOutlinedIcon className={classes.icons}/>
                </Typography>
                <Typography className={`${classes.boxText} ${classes.graph}`} align={'center'}>
                    Gráfica
                </Typography>
            </div>
        </div>
        </React.Fragment>
    )
}

const MunicipalityDataMov = ( props ) => {
    const { classes, state, mun, selectedLabel} = props;
    
    return (
        <div className={classes.container}>
            <StateData classes={classes} state={state} selectedLabel={selectedLabel}/>
            {/*<MunData classes={classes} mun={mun}/>*/}
        </div>
    )
}

const styles = () => ({
    numberBox: {
        fontWeight: 'bold',
        fontSize: '20px',
    },
    container: {
        margin: '8px',
        color: colors.BLACK
    },
    title: {
        justifyContent: 'center',
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'baseline',
        marginBottom: '10px'
    },
    state: {
        fontSize: '24px',
        textTransform: 'capitalize'
    },
    casosContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: '10px'
    }, 
    casos: {
        display: 'flex',
    },
    iconBox: {
        fontSize: '0px'
    },
    box: {
        textAlign: 'center',
        backgroundColor: colors.GRAY_BLUE,
        borderRadius: '4px',
        borderStyle: 'solid',
        fontWeight: 'bold',
        fontSize: '18px',
        padding: '5px',
        display: 'flex',
        flexDirection: 'column',
        color: colors.BLACK,
        width: '45%',
    },
    boxText: {
        fontSize: '12px'
    },
    graph: {
        cursor: 'pointer'
    },
    datos: {
        justifyContent: 'space-around',
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '10px'
    },  
    dotConfirm: {
        color: colors.BLUE_LIGHT
    },

    dotDeads: {
        color: colors.RED
    }
});
   
export default withStyles(styles)(MunicipalityDataMov);