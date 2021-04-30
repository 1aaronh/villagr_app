import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Marker } from "@react-google-maps/api";

class Markers extends PureComponent {
    render() {
    //   const google = this.props.google;
    //   let iw = 70,
    //     ih = 94;
      return this.props.stats.map((item) => {
        // if (item.aqi !== "-")
          return(
            <Marker
             position={{ lat: item.lat, lng: item.long_ }}
             id={item.id}
             onMouseover={this.props.mouseEnterHandler}
             onMouseout={this.props.mouseLeaveHandler}
          //    {...this.props}
            //  icon={{iconChoice}}
          />);
      });
    }
  }
  const mapStateToProps = (state) => {
    return {stats: state.stats};
  };
  export default connect(mapStateToProps, null)(Markers);
