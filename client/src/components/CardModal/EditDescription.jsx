import React, { useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import TextareaAutosize from 'react-textarea-autosize';
import { Button, Form, TextArea } from 'semantic-ui-react';

import { useClosableForm, useField } from '../../hooks';

import styles from './EditDescription.module.css';

const EditDescription = React.forwardRef(({ children, defaultValue, onUpdate }, ref) => {
  const [t] = useTranslation();
  const [isOpened, setIsOpened] = useState(false);
  const [value, handleFieldChange, setValue] = useField(null);

  const field = useRef(null);

  const open = useCallback(() => {
    setIsOpened(true);
    setValue(defaultValue || '');
  }, [defaultValue, setValue]);

  const close = useCallback(() => {
    setIsOpened(false);
    setValue(null);
  }, [setValue]);

  const submit = useCallback(() => {
    const cleanValue = value.trim() || null;

    if (cleanValue !== defaultValue) {
      onUpdate(cleanValue);
    }

    close();
  }, [defaultValue, onUpdate, value, close]);

  useImperativeHandle(
    ref,
    () => ({
      open,
      close,
    }),
    [open, close],
  );

  const handleChildrenClick = useCallback(() => {
    if (!getSelection().toString()) {
      open();
    }
  }, [open]);

  const handleFieldKeyDown = useCallback(
    event => {
      if (event.ctrlKey && event.key === 'Enter') {
        submit();
      }
    },
    [submit],
  );

  const [handleFieldBlur, handleControlMouseOver, handleControlMouseOut] = useClosableForm(
    isOpened,
    close,
  );

  const handleSubmit = useCallback(() => {
    submit();
  }, [submit]);

  useEffect(() => {
    if (isOpened) {
      field.current.ref.current.select();
    }
  }, [isOpened]);

  if (!isOpened) {
    return React.cloneElement(children, {
      onClick: handleChildrenClick,
    });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <TextArea
        ref={field}
        as={TextareaAutosize}
        value={value}
        placeholder={t('common.enterDescription')}
        minRows={3}
        spellCheck={false}
        className={styles.field}
        onKeyDown={handleFieldKeyDown}
        onChange={handleFieldChange}
        onBlur={handleFieldBlur}
      />
      <div className={styles.controls}>
        {/* eslint-disable-next-line jsx-a11y/mouse-events-have-key-events */}
        <Button
          positive
          content={t('action.save')}
          onMouseOver={handleControlMouseOver}
          onMouseOut={handleControlMouseOut}
        />
      </div>
    </Form>
  );
});

EditDescription.propTypes = {
  children: PropTypes.element.isRequired,
  defaultValue: PropTypes.string,
  onUpdate: PropTypes.func.isRequired,
};

EditDescription.defaultProps = {
  defaultValue: undefined,
};

export default React.memo(EditDescription);
