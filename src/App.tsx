import { ChangeEvent, SyntheticEvent, useState } from 'react';
import './App.css';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';
import { CompanySearch } from './company';
import { searchCompanies } from './api';

function App() {
  const [search, setSearch] = useState<string>("");
  const [portfolioValues, setPortfolioValues] = useState<string[]>([])
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>("");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
  };

  const onPortfolioCreate = (e: any) => {
    e.preventDefault();
    console.log(e);
    // const updatedPortfolio = [...portfolioValues, e.target[0].value];
    // setPortfolioValues(updatedPortfolio);
  }

  const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
      const result = await searchCompanies(search);
      if(typeof(result) === "string") {
        setServerError(result);
      } else if (Array.isArray(result.data)){
        setSearchResult(result.data);
      }
      console.log(searchResult);
  };
  return (
    <div className="App">
      <Search onSearchSubmit={onSearchSubmit} search={search} handleSearchChange={handleSearchChange} />
      <CardList searchResult={searchResult} onPortfolioCreate={onPortfolioCreate}/>
    </div>
  );
}

export default App;
