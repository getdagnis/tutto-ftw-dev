import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

import css from './SectionCategories.module.css';
import { tuttoCategories as CATEGORIES } from '../../categories';

class LocationImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
const CategoriesList = props => {
  const categories = props.cats;

  const catNames = categories.map(cat => (
    <div className={css.categoryMain} key={cat.id}>
      {cat.icon ? <img className={css.icon} src={cat.icon} alt={cat.name} /> : null}
      {cat.name}
      <div className={css.subcategoryList}>
        {cat.subcategories.map(subcat => (
          <div className={css.categorySub} key={subcat.id}>
            {subcat.name}
          </div>
        ))}
      </div>
    </div>
  ));

  return <div className={css.categoryList}>{catNames}</div>;
};

const SectionCategories = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={css.root}>
      <div className={css.title}>Visas nomas kategorijas:</div>
      <CategoriesList cats={CATEGORIES}></CategoriesList>
    </div>
  );
};

SectionCategories.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionCategories.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionCategories;
