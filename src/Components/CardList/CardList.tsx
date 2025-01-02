import { SyntheticEvent } from "react";
import { CompanySearch } from "../../company";
import Card from "../Card/Card"
import "./CardList.css"
import { v4 as uuidv4 } from "uuid";

interface Props {
  searchResult: CompanySearch[];
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

const CardList: React.FC<Props> = ({searchResult, onPortfolioCreate}: Props) : JSX.Element => {
  return (
    <>
      {searchResult.length > 0 ? (
        searchResult.map((result) => {
          return <Card id={result.symbol} key={uuidv4()} searchResult={result} onPortfolioCreate={onPortfolioCreate}/>
        })
      ) : (
        <h1>No results</h1>
      )}
    </>  
)}


export default CardList