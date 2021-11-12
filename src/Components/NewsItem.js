import {Component} from "react";

class NewsItem extends Component{

    render(){
        let {title,description,urlToImage,url}=this.props
        return( 

            <div className="card">
                 <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
                 By {this.props.source}
                </span>
                <img src={urlToImage} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="text-muted">Published At: {new Date(this.props.publishedAt).toGMTString()}</p>
                    <a href={url} 
                    target={"_blank"}  rel="noreferrer"  className="btn btn-sm btn-dark">Read more</a>
                </div>
            </div>
        )
    }
}


export default NewsItem;