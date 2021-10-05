import React, { useEffect, useState } from "react";
import axios from "axios";
import Parser from 'html-react-parser';

const DisplaySearch = ({filteredData, handleSearch}) => {
        let video = filteredData.filter((item) => {
            return item.title.includes(handleSearch)
        })
    return <>{Parser(video[0].video)}</>
}

const Home = ({location}) => {

    const [ url, setUrl ] = useState('');
    const [listdata,setListData] = useState([]);

    const fetchListData = async () => {
        try {
          const result = await axios.get("https://sleepy-turing-6de1dd.netlify.app/.netlify/functions/api/video");
          setListData(result.data.data)
    
        } catch (error) {
          console.error(error);
        }
      }

    useEffect(() =>{
        const params = new URLSearchParams(location.search)
        const urlLink = params.get('url')
        setUrl(urlLink ? urlLink : 'https://www.scorebat.com/embed/v/6158e2427c2ba/?utm_source=api&utm_medium=video&utm_campaign=v3')
        fetchListData()
    }, [])


    return <>
              { listdata.length > 0 ? <DisplaySearch filteredData={listdata} handleSearch={url}/> 
              : <h1>Sorry We don't have the video.</h1>}
          </>
  }

export default Home;