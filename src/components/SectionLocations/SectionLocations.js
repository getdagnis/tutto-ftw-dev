import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

import css from './SectionLocations.module.css';

import trailerImage from './images/img_trailer.jpg';
import bikerackImage from './images/img_bikerack.jpg';
import tourismImage from './images/img_tourism2.jpg';
import sportsImage from './images/img_kayak.jpg';
import toolsImage from './images/img_grinder.jpg';
import audioImage from './images/img_audio3.jpg';
import photoImage from './images/img_video4.jpg';
import computerImage from './images/img_server.jpg';

class LocationImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
const LazyImage = lazyLoadWithDimensions(LocationImage);

const locationLink = (name, image, searchQuery, spanBefore, spanAfter) => {
  // spanBefore and spanAfter are optional paramaters used to highlight
  // some parts of the link title green when hovering
  const nameText = (
    <span className={css.locationName}>
      {spanBefore ? <span>{spanBefore}</span> : null}
      {name}
      {spanAfter ? <span>{spanAfter}</span> : null}
    </span>
  );
  return (
    <NamedLink name="SearchPage" to={{ search: searchQuery }} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
      <div className={css.linkText}>{nameText}</div>
    </NamedLink>
  );
};

const SectionLocations = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={css.root}>
      <div className={css.title}>
        <FormattedMessage id="SectionLocations.subtitle" />
      </div>
      <div className={css.locations}>
        {locationLink(
          'Auto',
          trailerImage,
          '?address=Helsinki%2C%20Finland&bounds=60.2978389%2C25.254484899999966%2C59.9224887%2C24.782875800000056&origin=60.16985569999999%2C24.93837910000002',
          false,
          ' piekabes'
        )}
        {locationLink(
          'Auto',
          bikerackImage,
          '?address=Rovaniemi%2C%20Finland&bounds=67.18452510000002%2C27.32667850000007%2C66.1553745%2C24.736871199999996&origin=66.50394779999999%2C25.729390599999988',
          false,
          ' bagāžnieki'
        )}
        {locationLink(
          'inventārs',
          tourismImage,
          '?address=Ruka%2C%20Finland&bounds=66.1704578%2C29.14246849999995%2C66.1614402%2C29.110453699999994&origin=66.16594940000002%2C29.12646110000003',
          'Tūrisma '
        )}
        {locationLink(
          'atpūta',
          sportsImage,
          '?address=Ruka%2C%20Finland&b ounds=66.1704578%2C29.14246849999995%2C66.1614402%2C29.110453699999994&origin=66.16594940000002%2C29.12646110000003',
          'Sports un aktīvā '
        )}
        {locationLink(
          'instrumenti',
          toolsImage,
          '?address=Helsinki%2C%20Finland&bounds=60.2978389%2C25.254484899999966%2C59.9224887%2C24.782875800000056&origin=60.16985569999999%2C24.93837910000002',
          'Celtniecības '
        )}
        {locationLink(
          ' aprīkojums',
          audioImage,
          '?address=Rovaniemi%2C%20Finland&bounds=67.18452510000002%2C27.32667850000007%2C66.1553745%2C24.736871199999996&origin=66.50394779999999%2C25.729390599999988',
          'Audio un mūzikas'
        )}
        {locationLink(
          ' tehnika',
          photoImage,
          '?address=Ruka%2C%20Finland&bounds=66.1704578%2C29.14246849999995%2C66.1614402%2C29.110453699999994&origin=66.16594940000002%2C29.12646110000003',
          'Foto un video'
        )}
        {locationLink(
          '',
          computerImage,
          '?address=Ruka%2C%20Finland&bounds=66.1704578%2C29.14246849999995%2C66.1614402%2C29.110453699999994&origin=66.16594940000002%2C29.12646110000003',
          'Datori, IT pakalpojumi, elektronika'
        )}
      </div>
    </div>
  );
};

SectionLocations.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionLocations.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionLocations;
