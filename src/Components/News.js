import { Component } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading'
import InfiniteScroll from "react-infinite-scroll-component";

class News extends Component {
const apiKey="";
  static defaultProps = {
    country: 'in',
    category: 'general',
    pageSize: 6
  }
  static propsTypes = {}
  Correct (words) {
    const lower = words.toLowerCase()
    if(lower!=='general')
        return lower[0].toUpperCase() + lower.slice(1)
    else
        return " "
  }
  updateNews=async()=>{
    this.props.setProgress(0)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey={this.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({ loading: true })
    // fetching the data from news api
    this.props.setProgress(25)
    let data = await fetch(url)
    this.props.setProgress(50)
    let parsedData = await data.json()
    this.props.setProgress(75)
    // console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      loading: false,
      totalResults: parsedData.totalResults
    })
    this.props.setProgress(100)

  }
  
  constructor () {
    super()

    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults:0
    }
  }

  async componentDidMount () {
    try {
        this.updateNews()
   
    } catch (err) {
      console.error('Failed to Fetch the resources.')
      // document.write('Please check you internet Connection')
    }
  }
  fetchMoreData= async()=>{

    this.props.setProgress(0)
    this.setState({page:this.state.page+1})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=apiKey&page=${this.state.page}&pageSize=${this.props.pageSize}`
    // fetching the data from news api
    this.props.setProgress(25)
    let data = await fetch(url)
    this.props.setProgress(50)
    let parsedData = await data.json()
    this.props.setProgress(75)
    this.setState({
        articles: this.state.articles.concat(parsedData.articles),
        totalResults: parsedData.totalResults,
        loading:false
    })
    this.props.setProgress(100)
    
  }
  render () {
    return (
      <>
    
            <br />
            <h1 className='text-center my-3'>
                K2K News - Top {this.Correct(this.props.category)} Headlines
            </h1>
           <br />
           {this.state.loading&&<Loading/>}
           <InfiniteScroll
                dataLength={this.state.articles.length}
                next={this.fetchMoreData}
                hasMore={this.state.articles.length!==this.state.totalResults}
                loader={<Loading/>}
            >
                <div className="container">
                    <div className='row'>
                        {
                        this.state.articles.map(element => {         
                            return (
                            <div key={element.url} className='col-md-4 sm-12'>
                                <NewsItem
                                title={element.title}
                                description={element.description}
                                urlToImage={element.urlToImage}
                                url={element.url} 
                                source={element.source.name}
                                publishedAt={element.publishedAt}    
                            />
                            </div>
                            )
                        })}
                                    
                    </div>
                </div>
            </InfiniteScroll>
    
      </>
    )
  }
}

export default News
