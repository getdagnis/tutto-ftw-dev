import React from 'react';
import { string } from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { NamedLink } from '../../components';

import css from './SectionHero.module.css';
import moneyIcon from './icons/money.svg';
import rentIcon from './icons/rent.svg';

const SectionHero = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <NamedLink name="NewListingPage" className={css.heroLink}>
        <div className={css.heroContent}>
          <img className={css.icon} src={moneyIcon} alt="Pelni!" />
          <h1 className={css.heroMainTitle}>
            <FormattedMessage id="SectionHero.title" />
          </h1>
        </div>
      </NamedLink>
      <NamedLink
        name="SearchPage"
        to={{
          search: '',
        }}
        className={css.heroLink}
      >
        <div className={css.heroContent}>
          <img className={css.icon} src={rentIcon} alt="Nomā!" />
          <h1 className={css.heroSubTitle}>
            <FormattedMessage id="SectionHero.subtitle" />
          </h1>
        </div>
      </NamedLink>
    </div>
  );
};

SectionHero.defaultProps = { rootClassName: null, className: null };

SectionHero.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionHero;
