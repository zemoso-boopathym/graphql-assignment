import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { MESSAGES } from '../util/messages';

const GET_COUNTRIES = gql`
  query {
    countries {
      name
      languages {
        name
      }
      continent {
        name
      }
      capital
      emoji
    }
  }
`;

function CountryList() {
  const { error, loading, data } = useQuery(GET_COUNTRIES);

  if (loading) return <h1>{MESSAGES.LOADING}</h1>;

  if (error) return <h1>{MESSAGES.SOMETHING_WRONG}</h1>;

  return (
    <>
      <div className='container'>
        {data.countries.map((country, index) => (
          <div className='country' key={`${country.name}-${index}`}>
            <h2>{MESSAGES.COUNTRY_NAME}</h2>
            <div>
              <div>{country.name}</div>
            </div>

            <h3>{MESSAGES.LANGUAGES}</h3>
            <div>
              {country.languages.slice(0, 3).map((language) => (
                <div>{language.name}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default CountryList;
