import Media from 'react-media';
import { Card, Head, Item, List, Table } from './HomeTab.styled';

const HomeTab = () => {
  return (
    <Media
      queries={{
        max: '(max-width: 767px)',
      }}
    >
      {matches =>
        matches.max ? (
          <List>
            <Card>
              <ul>
                <Item>
                  <Head>Date</Head>
                  <p>04.01.19</p>
                </Item>
                <Item>
                  <Head>Type</Head>
                  <p>-</p>
                </Item>
                <Item>
                  <Head>Category</Head>
                  <p>Other</p>
                </Item>
                <Item>
                  <Head>Comment</Head>
                  <p>Gift for your wife</p>
                </Item>
                <Item>
                  <Head>Sum</Head>
                  <p>300.00</p>
                </Item>
                <Item>
                  <Head>Balance</Head>
                  <p>6 900.00</p>
                </Item>
              </ul>
            </Card>

            <Card>
              <ul>
                <Item>
                  <Head>Date</Head>
                  <p>04.01.19</p>
                </Item>
                <Item>
                  <Head>Type</Head>
                  <p>-</p>
                </Item>
                <Item>
                  <Head>Category</Head>
                  <p>Other</p>
                </Item>
                <Item>
                  <Head>Comment</Head>
                  <p>Gift for your wife</p>
                </Item>
                <Item>
                  <Head>Sum</Head>
                  <p>300.00</p>
                </Item>
                <Item>
                  <Head>Balance</Head>
                  <p>6 900.00</p>
                </Item>
              </ul>
            </Card>

            <Card>
              <ul>
                <Item>
                  <Head>Date</Head>
                  <p>04.01.19</p>
                </Item>
                <Item>
                  <Head>Type</Head>
                  <p>-</p>
                </Item>
                <Item>
                  <Head>Category</Head>
                  <p>Other</p>
                </Item>
                <Item>
                  <Head>Comment</Head>
                  <p>Gift for your wife</p>
                </Item>
                <Item>
                  <Head>Sum</Head>
                  <p>300.00</p>
                </Item>
                <Item>
                  <Head>Balance</Head>
                  <p>6 900.00</p>
                </Item>
              </ul>
            </Card>

            <Card>
              <ul>
                <Item>
                  <Head>Date</Head>
                  <p>04.01.19</p>
                </Item>
                <Item>
                  <Head>Type</Head>
                  <p>-</p>
                </Item>
                <Item>
                  <Head>Category</Head>
                  <p>Other</p>
                </Item>
                <Item>
                  <Head>Comment</Head>
                  <p>Gift for your wife</p>
                </Item>
                <Item>
                  <Head>Sum</Head>
                  <p>300.00</p>
                </Item>
                <Item>
                  <Head>Balance</Head>
                  <p>6 900.00</p>
                </Item>
              </ul>
            </Card>

            <Card>
              <ul>
                <Item>
                  <Head>Date</Head>
                  <p>04.01.19</p>
                </Item>
                <Item>
                  <Head>Type</Head>
                  <p>-</p>
                </Item>
                <Item>
                  <Head>Category</Head>
                  <p>Other</p>
                </Item>
                <Item>
                  <Head>Comment</Head>
                  <p>Gift for your wife</p>
                </Item>
                <Item>
                  <Head>Sum</Head>
                  <p>300.00</p>
                </Item>
                <Item>
                  <Head>Balance</Head>
                  <p>6 900.00</p>
                </Item>
              </ul>
            </Card>
          </List>
        ) : (
          <Table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Type</th>
                <th>Category</th>
                <th>Comment</th>
                <th>Sum</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>04.01.19</td>
                <td>-</td>
                <td>Other</td>
                <td>Gift for your wife</td>
                <td>300.00</td>
                <td>6 900.00</td>
              </tr>
              <tr>
                <td>04.01.19</td>
                <td>-</td>
                <td>Other</td>
                <td>Gift for your wife</td>
                <td>300.00</td>
                <td>6 900.00</td>
              </tr>
              <tr>
                <td>04.01.19</td>
                <td>-</td>
                <td>Other</td>
                <td>Gift for your wife</td>
                <td>300.00</td>
                <td>6 900.00</td>
              </tr>
              <tr>
                <td>04.01.19</td>
                <td>-</td>
                <td>Other</td>
                <td>Gift for your wife</td>
                <td>300.00</td>
                <td>6 900.00</td>
              </tr>
              <tr>
                <td>04.01.19</td>
                <td>-</td>
                <td>Other</td>
                <td>Gift for your wife</td>
                <td>300.00</td>
                <td>6 900.00</td>
              </tr>
            </tbody>
          </Table>
        )
      }
    </Media>
  );
};

export default HomeTab;
