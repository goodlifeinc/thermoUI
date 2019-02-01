import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Chart from '../../components/Chart';
import TemperatureContext from '../temperature-context';

class Home extends Component {
  render() {
    return (
      <TemperatureContext.Consumer>
        {({insideReport, outsideReport}) => {
            return (
              <Layout>
                <div>
                  <h3>
                    Inside: {insideReport ? insideReport.temp : 'fetching...'}
                  </h3>
                  <h3>
                    Outside: {outsideReport ? outsideReport.temp : 'fetching...'}
                  </h3>
                  {insideReport ? <Chart
                    report={insideReport}
                    name='Inside Temperature Report'
                  /> : 'fething report...'}
                </div>
              </Layout>
            );
          }
        }
      </TemperatureContext.Consumer>
    );
  }
}

export default Home;
