import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Header from '../Header';
import Footer from '../Footer';
import * as colors from '../../constants/colors';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import TimelineOutlinedIcon from '@material-ui/icons/TimelineOutlined';
import PolicyIcon from '@material-ui/icons/Policy';
import Grid from '@material-ui/core/Grid';
import { Helmet } from 'react-helmet';

const Methodology = ({ classes }) => {
  document.title = "Metodología | MexiCOVID";
  return (
    <div>
      <Helmet>
			<title>Metodología | MexiCOVID</title>
			<meta name="description" content="Metodología utilizada en MexiCOVID19" />
			<meta name="keywords" content="metodologia,usos tecnologias, coronavirus mexico tec,casos coronavirus metodologia,coronavirus ciencia,politica divulgacion"/>
			
      <meta property="og:title" content="Metodología | MexiCOVID"/>
      <meta property="og:description" content="Información sobre la metodología utilizada en MexiCOVID19"/>

      </Helmet>
      <div className={classes.container}>
        <Header fixed={true}/>
        <main className={classes.MethologyContainer}>
          <header className={classes.header}>
            <Typography className={classes.h1} variant={'h1'}>Metodología</Typography>	
          </header>
          <navbar className={classes.navbar}>
            <Button className={classes.label} href="#info" ><FindInPageIcon className={classes.icons}/>Fuente de Información</Button>	
            <Button className={classes.label} href="#data" ><TimelineOutlinedIcon className={classes.icons}/>Visualización de Datos</Button>
            <Button className={classes.label} href="#politic" ><PolicyIcon className={classes.icons}/>Política de Divulgación</Button>
          </navbar>
          <section id="cemexmetho" className={classes.row}>
            <div className={classes.title}>
              <Grid container direction="column" justify="center" alignItems="center">
                <Grid>
                  <div className={classes.textTitle}>Indice de vulnerabilidad en infraestructura de la vivienda (Mapa principal sección por municipios)</div>
                </Grid>
                <Grid>
                  <div><img src="cemex.png" className={classes.bigIconscem} alt="Image"/></div>
                </Grid>
              </Grid>  
            </div>
            <div className={classes.contentcemex}>
              <div  className={classes.Autortitle}>
                Cemex-Tec : Carmen Armenta Menchaca, Araceli Ortega Díaz, Joaquin R. García Viera, Héctor A. García López, Rena Porsen Overgaard
              </div>
              La metodología multidimensional para la construcción de índices toma en cuenta una cota Nacional θ que describe qué unidad de análisis (persona, familia, vivienda, municipio, etc.) tiene o no el acceso a algo (achievement o logro). En el presente caso si el Municipio no tiene el logro de mantener sus carencia debajo del nivel nacional se le dará una valor de 1 ya que tiene la carencia, y cero si no es carente en cierta dimensión. 
    	        Una vez definidos qué municipios son vulnerables, ya que sus carencias rebasan la cota nacional, la agregación de las dimensiones se realiza de acuerdo con pesos documentados. En el caso de México se ha documentado que, por derechos de acuerdo con Ley General de Desarrollo Social, las dimensiones aquí un usadas tienen peso igualitario, de tal manera que al construir el índice multidimensional seguimos la metodología del CONEVAL que agrega de manera igualitaria por dimensión. La dimensión de servicios de la vivienda  se agrega en una sola, la dimensión  características de la vivienda también se agrega en una sola, la de salud en otra (CONEVAL, 2018). Adicionalmente el Centro CEMEX-Tec de Monterrey incluyó la dimensión densidad, dando como resultado 4 dimensiones. En específico la carencia por servicios básicos en la vivienda toma el valor de si alguna de sus subdimensiones fue catalogada como carentes: viviendas sin acceso a drenaje o sin acceso a servicios de agua entubada. De igual manera la dimensión de calidad y espacios en la vivienda agrupa las carencias por hacinamiento, techo precario, muros precarios y piso de tierra en la vivienda. 
            </div>
          </section>
          <section id="info" className={`${classes.row} ${classes.topSection}`}>
            <div className={classes.title}>
              <Grid container direction="column" justify="center" alignItems="center">
                <Grid>
                  <div className={classes.textTitle}>Fuente de Información</div>
                </Grid>
                <Grid>
                  <div><FindInPageIcon className={classes.bigIcons}/></div>
                </Grid>
              </Grid>  
            </div>
            <div className={classes.content}>
              La información para alimentar los mapas coropléticos y las tablas que reportan el número de confirmados positivos y el número de decesos provienen de los reportes diarios que realiza la Secretaría de Salud.
              Nuestro equipo descarga la base de datos del sitio de datos abiertos habilitados por la autoridad federal con este propósito.
              La base de datos de pruebas es procesada para obtener el número de pruebas, positivos confirmados y decesos confirmados por COVID-19 por estados y municipios. 
              El número de casos acumulados por fecha y los nuevos casos se obtienen utilizando la fecha de su registro en la base de datos de pruebas y no por fecha de inicio de síntomas.
              Las pruebas y los casos positivos se agregan por entidad y municipio de residencia del paciente.
              <p><Button variant="contained" color="primary" onClick={()=>{
                window.open(`${process.env.REACT_APP_API_URL}/municipio/`, '_blank', 'toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=800,height=800')
              }}>
                Descargar datos
              </Button></p>
            </div>
          </section>
          <section id="data" className={classes.row}>
            <div className={classes.title}>
              <Grid container direction="column" justify="center" alignItems="center">
                <Grid>
                  <div className={classes.textTitle}>Metodología de Visualización de Datos</div>
                </Grid>
                <Grid>
                  <div><TimelineOutlinedIcon className={classes.bigIcons}/></div>
                </Grid>
              </Grid>  
            </div>
            <div className={classes.content}>
              Las visualizaciones de información cuantitativa son construidas en Javascript, HTML y CSS utilizando las librerías de Mapbox GL y D3. El método de partición del número de casos confirmados y sospechosos para la construcción de los mapas coropléticos es por cuantiles. Con este propósito, los datos de cada día por estado son ordenados de menor a mayor en un array y particionados en seis categorías. El suavizado de la curva de casos por fechas es a través del Centripetal Catmull-Rom spline
            </div>
          </section>
          <section id="politic" className={classes.row}>
            <div className={classes.title}>
              <Grid container direction="column" justify="center" alignItems="center">
                <Grid>
                  <div className={classes.textTitle}>Política de Divulgación de Información</div>
                </Grid>
                <Grid>
                  <div><PolicyIcon className={classes.bigIcons}/></div>
                </Grid>
              </Grid>  
            </div>
            <div className={classes.content}>
              Esta página es elaborada y mantenida por un grupo de profesores y estudiantes del Tecnológico de Monterrey. Las inconsistencias y errores son competencia de los autores de esta página y no de la Institución. Asimismo, las posturas y opiniones aquí vertidas representan la posición personal de los autores y no del Tecnológico de Monterrey.
            </div>
          </section>
        </main>
        <Footer/>
      </div>
    </div>
  );
}

const styles = () => ({
  container: {
    width: '100%',
    backgroundColor: colors.GRAY,
  },
  
  MethologyContainer: {
    width: '70%',
		margin: 'auto',
		padding: '25px',
    paddingTop: '128px',
    backgroundColor: colors.WHITE
  },

  h1: {
		fontSize: '36px'
	},

	header: {
		borderBottom: `1px solid ${colors.BLACK}`,
		display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between',
	},

  label:{
    flex: '1',
    textAlign: 'center',
    backgroundColor: colors.GRAY,
    margin: '2px'
  },

  row: {
    display: 'flex',
    flexDirection: 'row',
    margin: '50px 0px',
    borderRadius: '5px',
    padding: '64px 20px',
    backgroundColor: colors.GRAY,
  },

  topSection: {
    margin: '0px'
  },

  title: {
    flex: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  textTitle: {
    padding: '20px',
    flex: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },

  Autortitle:{
    marginBottom: '15px',
    fontSize: '20px',
  },

  contentcemex: {
    padding: '20px',
    flex: '5',
    display: 'grid',
    textAlign: 'justify'
  },

  content: {
    padding: '20px',
    flex: '5',
    display: 'flex',
    textAlign: 'justify',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },

  navbar: {
    margin: '20px 0px',
    display: 'flex',
    flexDirection: 'row',
  },
  
  icons: {
    marginRight: '15px',
    top: '0px',
    left: '0px',
    cursor: 'pointer',
    color: colors.BLACK,
  },

  bigIcons: {
    width: '50px',
    height: '50px',
    color: colors.BLACK,
  },

  bigIconscem: {
    width: '200px',
    height: '200px',
    color: colors.BLACK,
  },
  
  [`@media (max-width: ${1000}px)`]: {
    MethologyContainer: {
      width: '100%',
      paddingTop: '60px'
    },

    row: {
      flexDirection: 'column',
    },

    label: {
      minHeight: '50px',
      justifyContent: 'space-evenly'
    },

    navbar: {
      flexDirection: 'column'
    }
  },
  
});

export default withStyles(styles)(Methodology);
