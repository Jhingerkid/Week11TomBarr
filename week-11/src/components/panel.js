import React from 'react';

const Panel = props => {
    return(
      <div className="article-panel">
        <ArticleTitle titleText={props.article.titleText} titleLink={props.article.titleLink}/>
        <ArticleImage imgSrc={props.article.imgSrc} />
        <ArticleAuthor 
            avatarSrc={props.article.avatarSrc} 
            userName={props.article.userName} 
            author={props.article.author}
            readIn={props.article.readIn}
            posted={props.article.posted}
        />
      </div>
    );
};

const ArticleAuthor = props => {
    return (
        <div className="article-info">
            <div className="author-info">
                <img src={props.avatarSrc} alt="Author Avatar"/>
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

const ArticleImage = props => {
    return (
        <div className="article-image">
            <img src={props.imgSrc} alt="Article"/>
        </div>
    );
}

const ArticleTitle = props => {
    return (
        <div className="article-title">
            <a href={props.titleLink}>{props.titleText}</a>
        </div>
    );
}

export default Panel;