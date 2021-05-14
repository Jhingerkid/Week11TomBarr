import React from 'react';

class Panel extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="article-panel">
        <ArticleTitle titleText={this.props.article.titleText} titleLink={this.props.article.titleLink}/>
        <ArticleImage imgSrc={this.props.article.imgSrc} />
        <ArticleAuthor 
            avatarSrc={this.props.article.avatarSrc} 
            userName={this.props.article.userName} 
            author={this.props.article.author}
            readIn={this.props.article.readIn}
            posted={this.props.article.posted}
        />
      </div>
    );
  }
};

const ArticleAuthor = (props) => {
    return (
        <div className="article-info">
            <div className="author-info">
                <img src={props.avatarSrc}/>
                <div className="author-text">
                    <span>{props.userName}</span>
                    <span>{props.author}</span>
                </div>
            </div>
            <div className="read-info">
                <span>{props.readIn}</span>
                <span>{props.posted}</span>
            </div>
        </div>
    );
}

const ArticleImage = (props) => {
    return (
        <div className="article-image">
            <img src={props.imgSrc}/>
        </div>
    );
}

const ArticleTitle = (props) => {
    return (
        <div className="article-title">
            <a href={props.titleLink}>{props.titleText}</a>
        </div>
    );
}

export default Panel;