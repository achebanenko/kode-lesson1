# 1 занятие

## Домашнее задание

- указать в readme.md декомпозицию, оценку, реально затраченное время
- компонент Loader
- компонент RequestStatus
- компонент SelectField
- компонент TextareaField
- компонент CheckboxWithText
- компонент DeliveryTime
- страница 2 (story с моковыми данными)
- страница 3 (story с моковыми данными)

### Дополнительные задания

- Компонент счетчика
- самостоятельно разбить на компоненты и реализовать 4 страницу в сторибуке
- подключить storybook addon withInfo
- сделать deploy storybook на github pages

Дизайн:
https://www.figma.com/file/Dgu3rgO2gUHYxo5p68qAZE/trainee?node-id=3353%3A179

Преобразование svg в компонент:
https://www.smooth-code.com/open-source/svgr/playground/

Книга по атомарному дизайну:
https://medium.com/%D0%B0%D1%82%D0%BE%D0%BC%D0%B0%D1%80%D0%BD%D1%8B%D0%B9-%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD

### Дедлайн

Понедельник, 8 апреля, 12:00 KGD

# Процесс выполнения

Continious deploy https://unruffled-hermann-7f306a.netlify.com  
Static deploy https://artchebanenko.github.io/lesson-1/

### 0. Start

|Task|Est|Fact|
|-|-|-|
|Setup|1 hour|1 hour|
|Loader|1-2 hours|1+1 hours (svg recipe)|
|RequestStatus|1-2 hours|1 hour|
|SelectField|1-2 hours|2 hours|
|TextareaField|1-2 hours|1 hour|
|CheckboxWithText|1-2 hours|2 hours|
|DeliveryTime organism|2-4 hours|2+1 hours (inner flexing)|
|страница 2|2-3 hours|1 hour|
|страница 3|2-3 hours|2+1 hours (extra button)|
|deploy|2 hours|1+1 hours (study)|
|addon-info|2 hours|1+1 hours (study)|

### 1. RequestStatus
  
contextual colors (styled)

### 2. SelectField

export svg ArrowDown  
styled + atom FieldContainer  
rewrite HBox (prop half)  
actions  
too long value (extreme case)  
?TODO: input select  

### 3. TextareaField

useState + actions  

### 4. CheckboxWithText

svg empty, disabled, checked + ternary fill/stroke  
story knobs escapeHTML  
hidden input checkbox  

### 5. Loader

IconLoader > AnimationLoader  
styled.svg, import keyframes, rotate  
prop sync (to manage fill)  

### 6. DeliveryTime

insert TextFields (by prop notStandalone) into organism  
flexing InnerContainer, Dash  
TODO: time value transformation and dependency on each other  
ISSUE: onChange  

### 7. Page 2

providing different chunks for story adds  
?TODO: repeat prop-types

### 8. Page 3

ButtonColor from design  
simulating props for story adds  

### 9. Deploy

Continious via app.netlify  
Static via github docs  

### 10. withInfo

config.js, addParameters, info, inline  
ISSUE: markdown  