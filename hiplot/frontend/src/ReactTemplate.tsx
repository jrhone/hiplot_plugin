import React, { ReactNode } from "react"
import {
  withStreamlitConnection,
  StreamlitComponentBase,
  Streamlit,
} from "./streamlit"

import "bootstrap/dist/css/bootstrap.min.css"
import "./streamlit.css"

class ReactTemplate extends StreamlitComponentBase {
  public id: string = "amor"

  public render = (): ReactNode => {
    const html = this.props.args["html"]

    return (
      <iframe
        id={this.id}
        title="hiplot"
        srcDoc={html}
        width="100%"
        onLoad={() => this.handleLoad(this.id)}/>
    )
  }

  public handleLoad(id: string): any {
    const h = this.getAndSetFrameHeight(id)
    Streamlit.setFrameHeight(h)
  }

  private getDocHeight(doc: any): number {
      doc = doc || document
      var body = doc.body, html = doc.documentElement
      var height = Math.max(
          body.scrollHeight, body.offsetHeight,
          html.clientHeight, html.scrollHeight, html.offsetHeight
      )
      return height
  }

  private getAndSetFrameHeight(id: string): number {
      var ifrm: any = document.getElementById(id)
      var doc = ifrm.contentDocument? ifrm.contentDocument: ifrm.contentWindow.document

      const height = this.getDocHeight(doc)
      ifrm.style.height = height + "px"

      return height
  }
}

export default withStreamlitConnection(ReactTemplate)
