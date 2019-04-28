import React from 'react'

class Iframely extends React.Component {
  

  componentDidMount() {
    window.iframely && window.iframely.load();
  }

  
  getIframelyHtml(href) {
    return { __html: '<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="' + href + '"data-iframely-url="//cdn.iframe.ly/lYQs7a9"></a>></div></div><script async src="//cdn.iframe.l/embed.js" charset="utf-8"></script>' }
  }

  render() {
    const { href } = this.props;
    return <div dangerouslySetInnerHTML={this.getIframelyHtml(href)}></div>
  }
}

export default Iframely