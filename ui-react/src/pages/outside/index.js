import React, { Component } from 'react';

import Layout from '../../components/Layout';
import Chart from '../../components/Chart';
import TemperatureContext from '../temperature-context';

class Outside extends Component {
  render() {
    return (
      <TemperatureContext.Consumer>
        {({outsideReport}) => {
            return (
              <Layout>
                  <div>
                    {outsideReport ? <Chart
                    report={outsideReport}
                    name='Outside Temperature Report'
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

export default Outside;
