<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="ru_RU">
<context>
    <name>0010</name>
    <message>
        <source>How ffDiaporama works</source>
        <translation>Принципы работы ffDiaporama</translation>
    </message>
    <message>
        <source>Functional principles</source>
        <translation>Принципы функционирования</translation>
    </message>
    <message>
        <source>Predefined title slide</source>
        <translation>Шаблоны заголовков слайдов</translation>
    </message>
    <message>
        <source>The &quot;Visible&quot; property of blocks and the management of the breaks</source>
        <translation>Свойство &quot;видимости&quot; блоков и управление переходами между ними</translation>
    </message>
    <message>
        <source>All shots regulations versus current shot regulations</source>
        <translation>Настройки всех кадров и настройки текущего кадра</translation>
    </message>
    <message>
        <source>Style sheets</source>
        <translation>Таблицы стилей</translation>
    </message>
    <message>
        <source> This section contains general information on the concepts and methods of use of ffDiaporama </source>
        <translation> Этот раздел содержит общую информацию о принципах работы и методах использования  ffDiaporama </translation>
    </message>
    <message>
        <source>Index</source>
        <translation>Содержание</translation>
    </message>
    <message>
        <source>Dynamic variables</source>
        <translation>Динамические переменные</translation>
    </message>
</context>
<context>
    <name>0011</name>
    <message>
        <source>Functional principles</source>
        <translation>Принципы функционирования</translation>
    </message>
    <message>
        <source>The main control element of ffDiaporama is the timeline. The timeline lists the slides which compose the project.</source>
        <translation>Основным элементом в ffDiaporama является линия времени (таймлайн). На ней располагаются слайды, которые составляют проект.</translation>
    </message>
    <message>
        <source>It consists of 3 tracks: </source>
        <translation>Она состоит из 3 треков: </translation>
    </message>
    <message>
        <source>the background track</source>
        <translation>трек фоновых изображений</translation>
    </message>
    <message>
        <source>the mounting track</source>
        <translation>трек монтажа</translation>
    </message>
    <message>
        <source>and the music track.</source>
        <translation>трек музыки.</translation>
    </message>
    <message>
        <source>The slides</source>
        <translation>Слайды</translation>
    </message>
    <message>
        <source>Slides are shown one after another, in the order in which they appear in the time line.</source>
        <translation>Слайды отображаются один за другим в том порядке, в котором они появляются на линии времени.</translation>
    </message>
    <message>
        <source>The following diagram shows how slides function:</source>
        <translation>Следующая схема наглядно демонстрирует принципы функционирования слайдов:</translation>
    </message>
    <message>
        <source>The upper part of the diagram represents four slides: A, B, C and D. </source>
        <translation>В верхней части схемы представлено четыре слайда: A, B, C, D. </translation>
    </message>
    <message>
        <source>Each slide possesses an entering transition (symbolized on the diagram by a small rectangle labelled T). The transitions can have different durations (symbolized on the diagram by the lengths TA&apos;, TB&apos;, etc.): It is possible to define the duration of the entering transition for each slide separately (or to indicate no transition: duration=0).</source>
        <translation>Каждый слайд имеет входящий переход (представлен на схеме как маленький прямоугольник, помеченный буквой T). Переходы могут быть разной продолжительности (представлены на схеме отрезками TA, TB и т.д.): можно задать длительность входящего перехода для каждого слайда отдельно (или вообще убрать переход: длительность = 0).</translation>
    </message>
    <message>
        <source>Each slide possesses a duration which is appropriate for it (symbolized on the diagram by the lengths B&apos;, C&apos;, etc.): Some last only a few seconds while others can last several minutes. The durations are expressed in seconds but are not necessarily whole numbers: a slide might last 12.234 seconds.</source>
        <translation>Каждый слайд имеет соответствующую продолжительность (отмечено на схеме отрезками B&apos;, C&apos;, и т.д.): некоторые могут длиться всего несколько секунд, в то время как другие - несколько минут. Продолжительность выражается в секундах, но не обязательно целыми значениями. Например, слайд может длиться 12,234 секунды.</translation>
    </message>
    <message>
        <source>Each slide is a composite, an assembly of one or more multimedia elements which are animated over time. The animation is realized through shots.</source>
        <translation>Каждый слайд представляет собой композицию из одного или нескольких мультимедийных элементов, которые анимированы во времени. Анимация осуществляется посредством кадров.</translation>
    </message>
    <message>
        <source>Each slide can define a new background (that is shown under the multimedia elements of the slide if they don&apos;t fill out the whole screen).</source>
        <translation>Каждый слайд может иметь свой фон, который отображается под мультимедийными элементами слайда, если они заполняют не весь экран.</translation>
    </message>
    <message>
        <source>Each slide can define a new musical play-list.</source>
        <translation>Каждый слайд может иметь свой список воспроизведения музыки (плейлист).</translation>
    </message>
    <message>
        <source>Slides which do not define a background use the background defined in a previous slide. So in the following example: </source>
        <translation>Слайды для которых не определен фон используют фоновое изображение, определенное для предыдущего слайда. Например:</translation>
    </message>
    <message>
        <source>Slide 1: Defines a background</source>
        <translation>Слайд 1: определен фон</translation>
    </message>
    <message>
        <source>Slide 2: Does not define a background and therefore uses the background defined by slide 1</source>
        <translation>Слайд 2: фон не определен, поэтому используется фон, определенный для слайда 1</translation>
    </message>
    <message>
        <source>Slide 3: Does not define a background and therefore uses the background defined by slide 1</source>
        <translation>Слайд 3: фон не определен, поэтому используется фон, определенный для слайда 1</translation>
    </message>
    <message>
        <source>Slide 4: Defines a background</source>
        <translation>Слайд 4: определен фон</translation>
    </message>
    <message>
        <source>Slide 5: Does not define a background and therefore uses the background defined by slide 4</source>
        <translation>Слайд 5: фон не определен, поэтому используется фон, определенный для слайда 4</translation>
    </message>
    <message>
        <source>The same principle applies to the musical play-lists. As long as slides do not define a new play-list, they use the last defined play-list.</source>
        <translation>Этот же принцип используется при воспроизведении музыкальных файлов. До тех пор, пока для какого-то слайда не определен свой плейлист, используется последний определенный плейлист.</translation>
    </message>
    <message>
        <source>Remarks:</source>
        <translation>Примечания:</translation>
    </message>
    <message>
        <source>The total duration of the project is not equal to the sum of the durations of the slides because the transitions make the slides overlap: Two slides of 10 seconds, each with a transition of 1 second, will give a total duration for the project of 19 seconds (and not 20 seconds)!</source>
        <translation>Общая продолжительность проекта не равна сумме продолжительностей составляющих его слайдов, т.к. переходы обеспечивают перекрытие слайдов: два слайда по 10 секунд, каждый с переходом в 1 секунду, соответствуют общей продолжительности проекта в 19 секунд (а не 20 секунд)!</translation>
    </message>
    <message>
        <source>Shots and blocks</source>
        <translation>Кадры и блоки</translation>
    </message>
    <message>
        <source>The lower part of the diagram represents the composition of slide C. </source>
        <translation>В нижней части схемы представлен слайд С.</translation>
    </message>
    <message>
        <source>Each slide comprises one or more shots. The shots are represented on the diagram by rectangles C1, C2, C3, etc...</source>
        <translation>Каждый слайд состоит из одного или нескольких кадров. Кадры отмечены на схеме прямоугольниками C1, C2, C3, и т.д...</translation>
    </message>
    <message>
        <source>Each shot has its own duration (symbolized on the diagram by the lengths C1 &apos;, C2 &apos;, C3 &apos;, etc.). Some shots can last only seconds while others can last several minutes. Some shots can have a duration of zero. (The durations are expressed in seconds but are not necessarily whole numbers: A shot can very well last 12.234 seconds).</source>
        <translation>Каждый кадр имеет собственную продолжительность (отмечено на схеме отрезками C1 &apos;, C2 &apos;, C3 &apos; и т.д...). Некоторые кадры могут длиться всего несколько секунд, в то время как другие - несколько минут. Продолжительность некоторых кадров  может быть равна 0. (Продолжительность выражается в секундах, но не обязательно целыми значениями. Например, кадр может длиться 12,234 секунды).</translation>
    </message>
    <message>
        <source>The shots can contain several multimedia objects. The multimedia objects are integrated into blocks which can be of three types: title (containing only text), images (or photos), or video.</source>
        <translation>Кадры могут содержать несколько мультимедийных объектов, которые могут быть трех типов: заголовок (содержит только текст), изображение (или фотография) и видео.</translation>
    </message>
    <message>
        <source>The blocks define where and how the multimedia object appears on the screen. Each block can have a different framing that defines what is visible from the multimedia object within the block.</source>
        <translation>Блоки определяют, где и как мультимедийные объекты появятся на экране. Каждый блок может быть разной формы, которая определяет какая часть мультимедийного объекта видна.</translation>
    </message>
    <message>
        <source>The background of the shots is transparent. This means that if the image does not fill the whole screen, the background will appear.</source>
        <translation>Фон кадра является прозрачным. Это значит, что если изображение заполняет не  весь экран, то у него появляется фон.</translation>
    </message>
    <message>
        <source>The shots define the arrangement of blocks (multimedia objects) at any given moment.</source>
        <translation>Кадры определяют расположение блоков (мультимедийных объектов) в данный момент.</translation>
    </message>
    <message>
        <source>The shot animations are generated by the transformation of these arrangements from one shot to another.</source>
        <translation>Анимация кадров создается путем изменения их расположения на одном кадре по сравнению с другим.</translation>
    </message>
    <message>
        <source>The lengths of the shot animations are defined by the shot durations.</source>
        <translation>Длительность анимации кадра определяется его продолжительностью.</translation>
    </message>
    <message>
        <source>Specifically, if in the foreground, a block containing an image occupies the whole screen, and then in the following shot the same block occupies only a small part of the screen, then the animation will consist of the transformation of the image from the whole screen into that small part of the screen.</source>
        <translation>В частности, если на переднем плане находится блок с изображением, занимающим весь экран, а на следующем кадре тот же блок занимают лишь небольшую часть экрана, то анимация будет состоять в уменьшении полноэкранного изображения до соответствующего размера.</translation>
    </message>
    <message>
        <source>Example:</source>
        <translation>Пример:</translation>
    </message>
    <message>
        <source>Let&apos;s have 3 shots within a slide:</source>
        <translation>Представим себе слайд, содержащий 3 кадра:</translation>
    </message>
    <message>
        <source>Shot 1: Image using the whole screen: Duration=2 seconds.</source>
        <translation>Кадр 1: полноэкранное изображение; продолжительность 2 секунды.</translation>
    </message>
    <message>
        <source>Shot 2: Image using only the bottom right screen quarter: Duration 3 seconds.</source>
        <translation>Кадр 2: изображение, занимающее только нижнюю правую четверть экрана; продолжительность 3 секунды.</translation>
    </message>
    <message>
        <source>Shot 3: Image again using the whole screen: Duration=2 seconds.</source>
        <translation>Кадр 3: изображение снова занимает весь экран; продолжительность 2 секунды.</translation>
    </message>
    <message>
        <source>Result:</source>
        <translation>Результат:</translation>
    </message>
    <message>
        <source>The image will be shown on the whole screen for 2 seconds, will shrink gradually over 3 seconds towards the right lower quarter of the screen, and then will grow again for 2 seconds until it once more occupies the whole screen.</source>
        <translation>Изображение будет показано на весь экран 2 секунды, затем в течение 3 секунд будет постепенно уменьшаться до нижней правой четверти экрана, а затем за 2 секунды опять увеличится до полноэкранного.</translation>
    </message>
    <message>
        <source>The slide will end as soon as the image has reached the position defined in shot 3.</source>
        <translation>Слайд завершится, как только изображение достигнет позиции, определенной в третьем кадре.</translation>
    </message>
    <message>
        <source>The transformations are gradual: in the example you will see the image being gradually reduced.</source>
        <translation>Преобразование происходит постепенно: в этом примере вы увидите, что изображение уменьшается постепенно, а не мгновенно.</translation>
    </message>
    <message>
        <source>The transformations are made over the whole duration of the following shot.</source>
        <translation>Преобразования выполняется за время соответствующее продолжительности следующего кадра.</translation>
    </message>
    <message>
        <source>The framing definition of the objects in each block can vary from one shot to another. The following example shows three different definitions from the same block:</source>
        <translation>Обрезка (форма) объектов в каждом блоке может изменяться от одного кадра к другому. Следующий пример продемонстрирует три различных положения одного и того же блока:</translation>
    </message>
    <message>
        <source>1st shot: The image is complete.</source>
        <translation>1-ый кадр: целое изображение.</translation>
    </message>
    <message>
        <source>2nd shot: The image is re-framed on the statue.</source>
        <translation>2-ой кадр: изображение обрезается до фрагмента со статуей.</translation>
    </message>
    <message>
        <source>3rd shot: The image is re-framed on the pedestrians.</source>
        <translation>3-ий кадр: изображение обрезается до фрагмента с пешеходами.</translation>
    </message>
    <message>
        <source>If we apply these framing definitions to the previous 3 shots: </source>
        <translation>Если мы применим такую обрезку к предыдущим 3 кадрам:</translation>
    </message>
    <message>
        <source>The complete image will be shown on all the screen for 2 seconds, then it will be reduced gradually towards the right lower quarter of the screen over 3 seconds while zooming in on the statue, then it will grow again over 2 seconds until it once more occupies the whole screen while the &quot;camera&quot; moves towards the pedestrians.</source>
        <translation>Полное изображение будет показано на весь экран в течение 2 секунд, затем оно в течение 3 секунд будет постепенно уменьшаться до нижней правой четверти экрана, пока не покажет только статую, а затем в течение 2 секунд будет увеличиваться, пока снова не займет весь экран. Получается, как бы, что камера движется навстречу пешеходам.</translation>
    </message>
    <message>
        <source>ffDiaporama can manage up to several hundreds slides in a single project.</source>
        <translation>ffDiaporama может работать с несколькими сотнями слайдов в одном проекте.</translation>
    </message>
    <message>
        <source>Each slide can consist of tens of shots.</source>
        <translation>Каждый слайд может содержать десятки кадров.</translation>
    </message>
    <message>
        <source>Each slide can contain tens of blocks.</source>
        <translation>Каждый слайд может содержать десятки блоков.</translation>
    </message>
    <message>
        <source>Blocks can be visible on some shots and invisible on other.</source>
        <translation>Блоки могут быть видимыми на одних кадрах и не видимыми на других.</translation>
    </message>
</context>
<context>
    <name>0012</name>
    <message>
        <source>Predefined title slide</source>
        <translation>Шаблон заголовка слайда</translation>
    </message>
    <message>
        <source> Predefined title slide are complete slides including formatting and animations. </source>
        <translation>Шаблоны заголовков слайдов - это полноценные слайды, включая форматирование и анимацию.</translation>
    </message>
    <message>
        <source>The main interest of these slides is to standardize the slides within a project or across projects. </source>
        <translation>Их основное преимущество заключается в стандартизации слайдов в рамках проекта или нескольких проектов.</translation>
    </message>
    <message>
        <source>ffDiaporama included many Predefined title slides, but you can also define your own Predefined title slides. </source>
        <translation>В ffDiaporama включено много шаблонов заголовков слайдов, однако вы также можете создать свой собственный шаблон.</translation>
    </message>
    <message>
        <source>To do this, create a standard slide using the &lt;a href=&quot;0119.html&quot;&gt;Slide properties dialog box&lt;/a&gt; and save your slide as a model using: </source>
        <translation>Для этого создайте обычный слайд с помощью диалогового окна&lt;a href=&quot;0119.html&quot;&gt; Параметры слайда&lt;/a&gt; и сохраните слайд как шаблон, используя функцию:</translation>
    </message>
    <message>
        <source> Save as model function.</source>
        <translation>Сохранить как шаблон.</translation>
    </message>
    <message>
        <source>Remarks:</source>
        <translation>Примечания:</translation>
    </message>
    <message>
        <source>Predefined title slides are defined according to the following three categories: </source>
        <translation>Шаблоны заголовков слайдов подразделяются на три типа:</translation>
    </message>
    <message>
        <source>Project title</source>
        <translation>Название проекта</translation>
    </message>
    <message>
        <source>This type of slide is usually used early in the project as the opening credits. </source>
        <translation>Этот тип слайда обычно используется в начале проекта в качестве вступительных титров.</translation>
    </message>
    <message>
        <source>The texts variables that are used by the models of this slide type are based only on project information. For more information on project information, see: &lt;a href=&quot;0108.html&quot;&gt;Project properties dialog&lt;/a&gt;</source>
        <translation>Тексты переменных, используемых в шаблонах этого типа слайда, основаны только на информации о проекте. Более подробно об информации о проекте, см.: &lt;a href=&quot;0108.html&quot;&gt; Свойства проекта&lt;/a&gt;</translation>
    </message>
    <message>
        <source>Chapter title</source>
        <translation>Название главы</translation>
    </message>
    <message>
        <source>This type of slide is usually used several times in the project to mark the beginning of the chapter. </source>
        <translation>Это тип слайда обычно используется несколько раз в проекте для обозначения начала главы. </translation>
    </message>
    <message>
        <source>The texts variables that are used by the models of this slide type are based on project information and on chapter information.</source>
        <translation>Тексты переменных, используемых в шаблонах этого типа слайда, основаны на информации о проекте и информации о главе.</translation>
    </message>
    <message>
        <source>Credit title</source>
        <translation>Заключительный</translation>
    </message>
    <message>
        <source>This type of slide is usually used at the end of the project as the end credits. </source>
        <translation>Этот тип слайда обычно используется в конце проекта в качестве заключительных титров. </translation>
    </message>
    <message>
        <source>The texts variables that are used by the models of this slide type are generally computed. For more information on texts variables, see: &lt;a href=&quot;0013.html&quot;&gt;Dynamic variables&lt;/a&gt;</source>
        <translation>Тексты переменных, используемых в шаблонах этого типа слайда, в основном расчетные. Более подробно о текстовых переменных, см.: &lt;a href=&quot;0108.html&quot;&gt;Динамические переменные&lt;/a&gt;</translation>
    </message>
    <message>
        <source>Within each category, the predefined title slides are classified into the following types: </source>
        <translation>Каждый тип шаблонов заголовков слайдов подразделяется на следующие категории:</translation>
    </message>
    <message>
        <source>Statics models</source>
        <translation>Простые без анимации</translation>
    </message>
    <message>
        <source>This type lists statics models ie without animations.</source>
        <translation>Этот тип содержит простые шаблоны без анимации.</translation>
    </message>
    <message>
        <source>Animated models</source>
        <translation>Анимированные</translation>
    </message>
    <message>
        <source>This type lists animated models ie with several shots.</source>
        <translation>Этот тип содержит анимированные шаблоны, т.е. с несколькими кадрами.</translation>
    </message>
    <message>
        <source>Custom models</source>
        <translation>Пользовательские</translation>
    </message>
    <message>
        <source>This type lists the templates that you saved with the &lt;B&gt;&lt;I&gt;Save as model&lt;/I&gt;&lt;/B&gt; function of the &lt;a href=&quot;0119.html&quot;&gt;Slide properties&lt;/a&gt; dialog box.</source>
        <translation>Этот тип содержит шаблоны, которые вы сохранили с помощью кнопки &lt;B&gt;&lt;I&gt;Сохранить как шаблон&lt;/I&gt;&lt;/B&gt; диалогового окна &lt;a href=&quot;0119.html&quot;&gt;Параметры слайда&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>It will always be possible to create slides from a model using the &lt;a href=&quot;0103.html&quot;&gt;Add or modify a predefined title slide dialog box&lt;/a&gt; then convert it to a standard slide using this function: </source>
        <translation>Всегда можно создать слайды из шаблона, используя &lt;a href=&quot;0103.html&quot;&gt; Добавление или изменение слайда из шаблона&lt;/a&gt;, а затем преобразовать его в обычный слайд с помощью функции:</translation>
    </message>
    <message>
        <source> Convert to standard slide</source>
        <translation>Преобразовать в обычный слайд</translation>
    </message>
    <message>
        <source>The resources used by the models you create are not moved. So, if you include a photo in a model, the model will only be valid until the picture will not move. This is why it is recommended, to think resources included before creating a new model.</source>
        <translation>Ресурсы, используемые при создании шаблона, не перемещаются. Так, если вы вставите в шаблон фотографию, то шаблон будет отображаться корректно только до тех пор, пока изображение не будет перемещено (например, в другую папку). Именно поэтому рекомендуется подумать о вставке ресурсов перед созданием нового шаблона.</translation>
    </message>
</context>
<context>
    <name>0013</name>
    <message>
        <source>Dynamic variables</source>
        <translation>Динамические переменные</translation>
    </message>
    <message>
        <source>It&apos;s why variables are used in many parts of the application (slide, thumbnails, predefined titles slides, video tags, xbmc nfo, etc...)</source>
        <translation>Поэтому переменные используются во многих частях приложения (слайд, обложки, шаблоны заголовков слайдов, теги видео, xbmc nfo и др.)</translation>
    </message>
    <message>
        <source>Category</source>
        <translation>Категория</translation>
    </message>
    <message>
        <source>Variable</source>
        <translation>Переменная</translation>
    </message>
    <message>
        <source>Content</source>
        <translation>Описание</translation>
    </message>
    <message>
        <source>Project properties values</source>
        <translation>Значения свойств проекта</translation>
    </message>
    <message>
        <source>%PTT%</source>
        <translation>%PTT%</translation>
    </message>
    <message>
        <source>Value of the &lt;B&gt;&lt;I&gt;Project title&lt;/I&gt;&lt;/B&gt; field of the &lt;a href=&quot;0108.html&quot;&gt;Project properties&lt;/a&gt;</source>
        <translation>Значение поля &lt;B&gt;&lt;I&gt;Название проекта&lt;/I&gt;&lt;/B&gt;  из &lt;a href=&quot;0108.html&quot;&gt;Свойств проекта&lt;/a&gt;</translation>
    </message>
    <message>
        <source>%PAU%</source>
        <translation>%PAU%</translation>
    </message>
    <message>
        <source>Value of the &lt;B&gt;&lt;I&gt;Project author&lt;/I&gt;&lt;/B&gt; field of the &lt;a href=&quot;0108.html&quot;&gt;Project properties&lt;/a&gt;</source>
        <translation>Значение поля &lt;B&gt;&lt;I&gt;Автор проекта&lt;/I&gt;&lt;/B&gt;  из &lt;a href=&quot;0108.html&quot;&gt;Свойств проекта&lt;/a&gt;</translation>
    </message>
    <message>
        <source>%PAI%</source>
        <translation>%PAI%</translation>
    </message>
    <message>
        <source>Value of the &lt;B&gt;&lt;I&gt;Project author&lt;/I&gt;&lt;/B&gt; field of the &lt;a href=&quot;0108.html&quot;&gt;Project properties&lt;/a&gt; displayed as &lt;U&gt;Author presents&lt;/U&gt;</source>
        <translation>Значение поля &lt;B&gt;&lt;I&gt;Автор проекта&lt;/I&gt;&lt;/B&gt;  из &lt;a href=&quot;0108.html&quot;&gt;Свойств проекта&lt;/a&gt; отображаемое как &lt;U&gt;Автор представляет&lt;/U&gt;</translation>
    </message>
    <message>
        <source>%PAP%</source>
        <translation>%PAP%</translation>
    </message>
    <message>
        <source>Value of the &lt;B&gt;&lt;I&gt;Project author&lt;/I&gt;&lt;/B&gt; field of the &lt;a href=&quot;0108.html&quot;&gt;Project properties&lt;/a&gt; displayed as &lt;U&gt;A Author production&lt;/U&gt;</source>
        <translation>Значение поля &lt;B&gt;&lt;I&gt;Автор проекта&lt;/I&gt;&lt;/B&gt;  из &lt;a href=&quot;0108.html&quot;&gt;Свойств проекта&lt;/a&gt; отображаемое как &lt;U&gt;Производство Автор&lt;/U&gt;</translation>
    </message>
    <message>
        <source>%PAL%</source>
        <translation>%PAL%</translation>
    </message>
    <message>
        <source>Value of the &lt;B&gt;&lt;I&gt;Project album&lt;/I&gt;&lt;/B&gt; field of the &lt;a href=&quot;0108.html&quot;&gt;Project properties&lt;/a&gt;</source>
        <translation>Значение поля &lt;B&gt;&lt;I&gt;Альбом проекта&lt;/I&gt;&lt;/B&gt;  из &lt;a href=&quot;0108.html&quot;&gt;Свойств проекта&lt;/a&gt;</translation>
    </message>
    <message>
        <source>%PCT%</source>
        <translation>%PCT%</translation>
    </message>
    <message>
        <source>Value of the &lt;B&gt;&lt;I&gt;Project comment&lt;/I&gt;&lt;/B&gt; field of the &lt;a href=&quot;0108.html&quot;&gt;Project properties&lt;/a&gt;</source>
        <translation>Значение поля &lt;B&gt;&lt;I&gt;Комментарий к проекту&lt;/I&gt;&lt;/B&gt;  из &lt;a href=&quot;0108.html&quot;&gt;Свойств проекта&lt;/a&gt;</translation>
    </message>
    <message>
        <source>%PDD%</source>
        <translation>%PDD%</translation>
    </message>
    <message>
        <source>Duration of the project displayed as &lt;U&gt;hh:mm:ss&lt;/U&gt;</source>
        <translation>Продолжительность проекта отображаемая как &lt;U&gt;hh:mm:ss&lt;/U&gt;</translation>
    </message>
    <message>
        <source>%PSC%</source>
        <translation>%PSC%</translation>
    </message>
    <message>
        <source>Project slide count (Number of slide in the project)</source>
        <translation>Количество слайдов проекта (в виде цифры)</translation>
    </message>
    <message>
        <source>%PLD%</source>
        <translation>%PLD%</translation>
    </message>
    <message>
        <source>Long date (The form of the display depends on geographical information provided by the computer, depending on the current language)</source>
        <translation>Дата полностью (форма отображения зависит от географической информации, представленной на компьютере, в зависимости от текущего языка)</translation>
    </message>
    <message>
        <source>%PSD%</source>
        <translation>%PSD%</translation>
    </message>
    <message>
        <source>Short date (The form of the display depends on &lt;B&gt;&lt;I&gt;Short date format&lt;/I&gt;&lt;/B&gt; selected in the &lt;a href=&quot;0101.html&quot;&gt;Application options dialog&lt;/a&gt;)</source>
        <translation>Дата кратко (форма отображения зависит от выбранного значения параметра &lt;B&gt;&lt;I&gt;Краткий формат даты&lt;/I&gt;&lt;/B&gt; диалогового окна &lt;a href=&quot;0101.html&quot;&gt;Настройки программы&lt;/a&gt;)</translation>
    </message>
    <message>
        <source>%PYR%</source>
        <translation>%PYR%</translation>
    </message>
    <message>
        <source>Year (The year of the event date as a four digit number)</source>
        <translation>Год (год даты события в виде четырехзначного числа)</translation>
    </message>
    <message>
        <source>%PMM%</source>
        <translation>%PMM%</translation>
    </message>
    <message>
        <source>Month (The month of the event date as a name, depending on the current language: January, February, etc...)</source>
        <translation>Месяц (название месяца даты события в зависимости от текущего языка: январь, февраль и т.д.)</translation>
    </message>
    <message>
        <source>%PMD%</source>
        <translation>%PMD%</translation>
    </message>
    <message>
        <source>Month as number (The month of the event date as a two digit number)</source>
        <translation>Номер месяца (месяц даты события в виде двухзначного числа)</translation>
    </message>
    <message>
        <source>%PDY%</source>
        <translation>%PDY%</translation>
    </message>
    <message>
        <source>Day (The day of the event date as a two digit number)</source>
        <translation>День (день даты события в виде двухзначного числа)</translation>
    </message>
    <message>
        <source>%PDW%</source>
        <translation>%PDW%</translation>
    </message>
    <message>
        <source>Day of week (The day of week of the event date as a name, depending on the current language: Monday, Thuesday, etc...)</source>
        <translation>День недели (название дня недели даты события в зависимости от текущего языка: понедельник, вторник и т.д.)</translation>
    </message>
    <message>
        <source>Current slide values</source>
        <translation>Значения текущего слайда</translation>
    </message>
    <message>
        <source>%CSN%</source>
        <translation>%CSN%</translation>
    </message>
    <message>
        <source>Value of the &lt;B&gt;&lt;I&gt;Slide name&lt;/I&gt;&lt;/B&gt; field of the slide as defined in the &lt;U&gt;Slide settings zone&lt;/U&gt; of the &lt;a href=&quot;0119.html&quot;&gt;Slide properties dialog&lt;/a&gt;</source>
        <translation>Значение поля &lt;B&gt;&lt;I&gt;Имя текущего слайда&lt;/I&gt;&lt;/B&gt;, определенное в &lt;U&gt;Области настроек слайда&lt;/U&gt; диалогового окна &lt;a href=&quot;0119.html&quot;&gt;Параметры слайда&lt;/a&gt;</translation>
    </message>
    <message>
        <source>%CSR%</source>
        <translation>%CSR%</translation>
    </message>
    <message>
        <source>Current slide number</source>
        <translation>Номер текущего слайда</translation>
    </message>
    <message>
        <source>Chapters values</source>
        <translation>Значения глав</translation>
    </message>
    <message>
        <source>%CCN%</source>
        <translation>%CCN%</translation>
    </message>
    <message>
        <source>Value of the &lt;B&gt;&lt;I&gt;Chapter name&lt;/I&gt;&lt;/B&gt; field of the latest slide which defined &lt;U&gt;Chapters information&lt;/U&gt;. (Chapters information may be defined in &lt;a href=&quot;0105.html&quot;&gt;Chapter properties dialog&lt;/a&gt; or in &lt;a href=&quot;0103.html&quot;&gt;Predefined title slide dialog&lt;/a&gt;).</source>
        <translation>Значение поля &lt;B&gt;&lt;I&gt;Название главы&lt;/I&gt;&lt;/B&gt;, определенное в &lt;U&gt;Информации о главе&lt;/U&gt;. (Информация о главе может быть задана в диалоговом окне &lt;a href=&quot;0105.html&quot;&gt;Cвойства главы&lt;/a&gt; или &lt;a href=&quot;0103.html&quot;&gt;Шаблон заголовка слайда&lt;/a&gt;).</translation>
    </message>
    <message>
        <source>%CCR%</source>
        <translation>%CCR%</translation>
    </message>
    <message>
        <source>Current chapter number</source>
        <translation>Номер текущей главы</translation>
    </message>
    <message>
        <source>%CCI%</source>
        <translation>%CCI%</translation>
    </message>
    <message>
        <source>%CCD%</source>
        <translation>%CCD%</translation>
    </message>
    <message>
        <source>Current chapter duration</source>
        <translation>Длительность текущей главы</translation>
    </message>
    <message>
        <source>%CCT%</source>
        <translation>%CCT%</translation>
    </message>
    <message>
        <source>Chapter count (Number of chapter in the project)</source>
        <translation>Количество глав (в виде цифры)</translation>
    </message>
    <message>
        <source>%CLD%</source>
        <translation>%CLD%</translation>
    </message>
    <message>
        <source>Long date of the chapter (if one is defined or project&apos;s date). (The form of the display depends on geographical information provided by the computer, depending on the current language)</source>
        <translation>Дата полностью (если она отличается или дата проекта). (Форма отображения зависит от географической информации, представленной на компьютере, в зависимости от текущего языка)</translation>
    </message>
    <message>
        <source>%CSD%</source>
        <translation>%CSD%</translation>
    </message>
    <message>
        <source>Short date of the chapter (if one is defined or project&apos;s date). (The form of the display depends on &lt;B&gt;&lt;I&gt;Short date format&lt;/I&gt;&lt;/B&gt; selected in the &lt;a href=&quot;0101.html&quot;&gt;Application options dialog&lt;/a&gt;)</source>
        <translation>Дата кратко (если она отличается или дата проекта). (Форма отображения зависит от выбранного значения параметра &lt;B&gt;&lt;I&gt;Краткий формат даты&lt;/I&gt;&lt;/B&gt; диалогового окна &lt;a href=&quot;0101.html&quot;&gt;Настройки программы&lt;/a&gt;)</translation>
    </message>
    <message>
        <source>%CYR%</source>
        <translation>%CYR%</translation>
    </message>
    <message>
        <source>Year of the chapter&apos;s date (if one is defined or year of project&apos;s date), as a four digit number.</source>
        <translation>Год даты главы (если он отличается или год даты проекта) в виде четырехзначного числа.</translation>
    </message>
    <message>
        <source>%CMM%</source>
        <translation>%CMM%</translation>
    </message>
    <message>
        <source>Month of the chapter&apos;s date (if one is defined or month of project&apos;s date) as a name (depending on the current language: January, February, etc...)</source>
        <translation>Название месяца даты главы (если он отличается или месяц даты проекта) (зависит от текущего языка: январь, февраль и т.д.)</translation>
    </message>
    <message>
        <source>%CMD%</source>
        <translation>%CMD%</translation>
    </message>
    <message>
        <source>Month of the chapter&apos;s date (if one is defined or month of project&apos;s date) as a two digit number.</source>
        <translation>Месяц даты главы (если он отличается или месяц даты проекта) в виде двухзначного числа.</translation>
    </message>
    <message>
        <source>%CDY%</source>
        <translation>%CDY%</translation>
    </message>
    <message>
        <source>Day of the chapter&apos;s date (if one is defined or day of project&apos;s date) as a two digit number.</source>
        <translation>День даты главы (если он отличается или день даты проекта) в виде двухзначного числа.</translation>
    </message>
    <message>
        <source>%CDW%</source>
        <translation>%CDW%</translation>
    </message>
    <message>
        <source>Day of week of the chapter&apos;s date (if one is defined or day of project&apos;s date) as a a name (depending on the current language: Monday, Thuesday, etc...)</source>
        <translation>Название дня недели даты главы (если он отличается или день даты проекта) (зависит от текущего языка: понедельник, вторник и т.д.)</translation>
    </message>
    <message>
        <source>Various values</source>
        <translation>Разные значения</translation>
    </message>
    <message>
        <source>%FFD%</source>
        <translation>%FFD%</translation>
    </message>
    <message>
        <source>ffDiaporama version as &lt;U&gt;ffDiaporama 1.7 (20130919)&lt;/U&gt;</source>
        <translation>Версия ffDiaporama в виде &lt;U&gt;ffDiaporama 1.7 (20130919)&lt;/U&gt;</translation>
    </message>
    <message>
        <source>%CPY%</source>
        <translation>%CPY%</translation>
    </message>
    <message>
        <source>%END%</source>
        <translation>%END%</translation>
    </message>
    <message>
        <source>The end (depending on the current language)</source>
        <translation>Конец (зависит от текущего языка)</translation>
    </message>
    <message>
        <source>%STA%</source>
        <translation>%STA%</translation>
    </message>
    <message>
        <source>%STP%</source>
        <translation>%STP%</translation>
    </message>
    <message>
        <source>A full text composed of project statistics (Number of slides, project duration, list of chapters, list of musics, how many photo, vector images, videos and predefined title slides, etc...) </source>
        <translation>Полный текст состоит из статистики проекта (количество слайдов, продолжительность проекта, список глав, количество фотографий, векторных изображений, видеофайлов, шаблонов слайдов и др.) </translation>
    </message>
    <message>
        <source>%STM%</source>
        <translation>%STM%</translation>
    </message>
    <message>
        <source>A full text composed of list of musics</source>
        <translation>Полный текст состоит из списка музыки</translation>
    </message>
    <message>
        <source>%TLD%</source>
        <translation>%TLD%</translation>
    </message>
    <message>
        <source>Current date as long date format (The form of the display depends on geographical information provided by the computer, depending on the current language)</source>
        <translation>Текущая дата (полностью) (Форма отображения зависит от географической информации, представленной на компьютере, в зависимости от текущего языка)</translation>
    </message>
    <message>
        <source>%TSD%</source>
        <translation>%TSD%</translation>
    </message>
    <message>
        <source>Current date as short date format (The form of the display depends on &lt;B&gt;&lt;I&gt;Short date format&lt;/I&gt;&lt;/B&gt; selected in the &lt;a href=&quot;0101.html&quot;&gt;Application options dialog&lt;/a&gt;)</source>
        <translation>Текущая дата (кратко) (Форма отображения зависит от выбранного значения параметра &lt;B&gt;&lt;I&gt;Краткий формат даты&lt;/I&gt;&lt;/B&gt; диалогового окна &lt;a href=&quot;0101.html&quot;&gt;Настройки программы&lt;/a&gt;)</translation>
    </message>
    <message>
        <source>%TYR%</source>
        <translation>%TYR%</translation>
    </message>
    <message>
        <source>Current date&apos;s year as a four digit number</source>
        <translation>Год текущей даты в виде четырехзначного числа</translation>
    </message>
    <message>
        <source>%TMM%</source>
        <translation>%TMM%</translation>
    </message>
    <message>
        <source>Current date&apos;s month as a name (depending on the current language: January, February, etc...)</source>
        <translation>Название месяца текущей даты (зависит от текущего языка: январь, февраль и т.д.)</translation>
    </message>
    <message>
        <source>%TMD%</source>
        <translation>%TMD%</translation>
    </message>
    <message>
        <source>Current date&apos;s month as as a two digit number</source>
        <translation>Месяц текущей даты в виде двухзначного числа</translation>
    </message>
    <message>
        <source>%TDY%</source>
        <translation>%TDY%</translation>
    </message>
    <message>
        <source>Current date&apos;s day as a two digit number</source>
        <translation>День текущей даты в виде двухзначного числа</translation>
    </message>
    <message>
        <source>%TDW%</source>
        <translation>%TDW%</translation>
    </message>
    <message>
        <source>Current date&apos;s day of week as a a name (depending on the current language: Monday, Thuesday, etc...)</source>
        <translation>Название дня недели текущей даты (зависит от текущего языка: понедельник, вторник и т.д.)</translation>
    </message>
    <message>
        <source>%PLN%</source>
        <translation>%PLN%</translation>
    </message>
    <message>
        <source>Value of the &lt;B&gt;&lt;I&gt;Project location name&lt;/I&gt;&lt;/B&gt; field of the &lt;a href=&quot;0108.html&quot;&gt;Project properties&lt;/a&gt;</source>
        <translation>Значение поля &lt;B&gt;&lt;I&gt;Имя местоположения проекта&lt;/I&gt;&lt;/B&gt; из &lt;a href=&quot;0108.html&quot;&gt;Свойств проекта&lt;/a&gt;</translation>
    </message>
    <message>
        <source>%PLA%</source>
        <translation>%PLA%</translation>
    </message>
    <message>
        <source>Value of the &lt;B&gt;&lt;I&gt;Project location address&lt;/I&gt;&lt;/B&gt; field of the &lt;a href=&quot;0108.html&quot;&gt;Project properties&lt;/a&gt;</source>
        <translation>Значение поля &lt;B&gt;&lt;I&gt;Адрес местоположения проекта&lt;/I&gt;&lt;/B&gt; из &lt;a href=&quot;0108.html&quot;&gt;Свойств проекта&lt;/a&gt;</translation>
    </message>
    <message>
        <source>%CLN%</source>
        <translation>%CLN%</translation>
    </message>
    <message>
        <source>Current chapter location name (if one is defined or project&apos;s location name).</source>
        <translation>Имя местоположения текущей главы (если оно определено или соответствует имени местоположения проекта).</translation>
    </message>
    <message>
        <source>%CLA%</source>
        <translation>%CLA%</translation>
    </message>
    <message>
        <source>Current chapter location address (if one is defined or project&apos;s location address).</source>
        <translation>Адрес местоположения текущей главы (если он определен или соответствует адресу местоположения проекта).</translation>
    </message>
    <message>
        <source>The following table lists all the available variables:</source>
        <translation>В следующей таблице перечислены доступные переменные:</translation>
    </message>
    <message>
        <source>The big interest of variables is that they are inserted into text (see: &lt;a href=&quot;0120.html&quot;&gt;Edit text dialog&lt;/a&gt;) and are transformed into values ​​only when they are used.</source>
        <translation>Переменные имеют особое значение поскольку вставляются в текст (смотрите: &lt;a href=&quot;0120.html&quot;&gt;Редактирование текста&lt;/a&gt;) и преобразуются в значения тольо при их использовании.</translation>
    </message>
    <message>
        <source>Current chapter number displayed as &lt;U&gt;Chapter N°&lt;/U&gt; (depending on the current language)</source>
        <translation>Номер текущей главы, отображаемый как &lt;U&gt;Глава №&lt;/U&gt; (зависит от текущего языка)</translation>
    </message>
    <message>
        <source>Copyright of the project construct as &lt;U&gt;© Year - Author&lt;/U&gt; with &lt;B&gt;&lt;I&gt;Year&lt;/I&gt;&lt;/B&gt; is the year of today&apos;s date and &lt;B&gt;&lt;I&gt;Author&lt;/I&gt;&lt;/B&gt; is the value of the &lt;B&gt;&lt;I&gt;Project author&lt;/I&gt;&lt;/B&gt; field of the &lt;a href=&quot;0108.html&quot;&gt;Project properties&lt;/a&gt;</source>
        <translation>Конструкция авторского знака проекта: &lt;U&gt;© Год - Автор&lt;/U&gt;, где &lt;B&gt;&lt;I&gt;Год&lt;/I&gt;&lt;/B&gt; - это год текущей даты, а &lt;B&gt;&lt;I&gt;Автор&lt;/I&gt;&lt;/B&gt; - это значение поля &lt;B&gt;&lt;I&gt;Автор проекта&lt;/I&gt;&lt;/B&gt; из &lt;a href=&quot;0108.html&quot;&gt;Свойств проекта&lt;/a&gt;</translation>
    </message>
    <message>
        <source>A full text composed of: Project done the &lt;U&gt;&lt;B&gt;&lt;I&gt;short date&lt;/I&gt;&lt;/B&gt;&lt;/U&gt; with «&lt;U&gt;&lt;B&gt;&lt;I&gt;ffDiaporama version&lt;/I&gt;&lt;/B&gt;&lt;/U&gt;» on a &lt;U&gt;&lt;B&gt;&lt;I&gt;Operating system&lt;/I&gt;&lt;/B&gt;&lt;/U&gt; (&lt;U&gt;&lt;B&gt;&lt;I&gt;Number of Core/CPU&lt;/I&gt;&lt;/B&gt;&lt;/U&gt; Core/CPU) computer.</source>
        <translation>Полный текст состоит из: Проект создан &lt;U&gt;&lt;B&gt;&lt;I&gt;дата (краткий формат)&lt;/I&gt;&lt;/B&gt;&lt;/U&gt; в «&lt;U&gt;&lt;B&gt;&lt;I&gt;ffDiaporama версии&lt;/I&gt;&lt;/B&gt;&lt;/U&gt;» на компьютере с &lt;U&gt;&lt;B&gt;&lt;I&gt;Операционная система&lt;/I&gt;&lt;/B&gt;&lt;/U&gt; (&lt;U&gt;&lt;B&gt;&lt;I&gt;количество ядер/CPU&lt;/I&gt;&lt;/B&gt;&lt;/U&gt; Core/CPU).</translation>
    </message>
</context>
<context>
    <name>0014</name>
    <message>
        <source>The &quot;Visible&quot; property of blocks and the management of the breaks</source>
        <translation>Свойство &quot;видимости&quot; блоков и управление переходами между ними</translation>
    </message>
    <message>
        <source>Blocks have a visible/invisible property. In the following example, the one image is inserted 3 times (in 3 different blocks) into the same slide.</source>
        <translation>Блоки имеют свойство видимости / невидимости. В следующем примере одно изображение вставляется 3 раза (в 3 разных блока) на один и тот же слайд.</translation>
    </message>
    <message>
        <source>The first block consists of the whole image filling the whole screen</source>
        <translation>Первый блок состоит целиком из полноэкранного изображения</translation>
    </message>
    <message>
        <source>The second block consists of the image re-framed on the statue and positioned in an ellipse at the right of the screen</source>
        <translation>Второй блок содержит изображение, обрезанное в форме эллипса до фрагмента со статуей, размещенное в правой части экрана</translation>
    </message>
    <message>
        <source>The third block consists of the image re-framed on the pedestrians and also positioned in an ellipse at the right of the screen</source>
        <translation>Третий блок содержит изображение, обрезанное в форме эллипса до фрагмента с пешеходами, размещенное в правой части экрана</translation>
    </message>
    <message>
        <source>The statue and the pedestrians have their visibility property set to invisible on the 1st shot.</source>
        <translation>Статуе и пешеходам установлено свойство невидимости на первом кадре.</translation>
    </message>
    <message>
        <source>Then the statue becomes visible on the 2nd shot.</source>
        <translation>Затем на втором кадре статуя становится видимой.</translation>
    </message>
    <message>
        <source>Finally, the statue once more becomes invisible on the 3rd shot and the pedestrians become visible.</source>
        <translation>Наконец, на третьем кадре статуя снова становится невидимой и видимыми становятся пешеходы.</translation>
    </message>
    <message>
        <source>Result:</source>
        <translation>Результат:</translation>
    </message>
    <message>
        <source>For 2 seconds, the 1st shot is shown and we see only the whole image which occupies all the screen</source>
        <translation>2 секунды показывается первый кадр и мы видим только целое изображение, занимающее полный экран</translation>
    </message>
    <message>
        <source>Over the next 2 seconds, the statue appears</source>
        <translation>В течение следующих 2 секунд появляется статуя</translation>
    </message>
    <message>
        <source>Over a further 2 seconds, the statue is replaced by the pedestrians</source>
        <translation>В течение следующих 2 секунд статуя заменяется пешеходами</translation>
    </message>
    <message>
        <source>This example is really very simple, because it is also possible to animate the appearance and the disappearance of blocks.</source>
        <translation>Этот пример является очень простым, поскольку также возможна анимация появления и исчезновения блоков.</translation>
    </message>
    <message>
        <source>Indeed, as shown previously, animations are generated by the transformation of the arrangement from one shot to another.</source>
        <translation>Итак, как и упоминалось ранее, анимация создается  путем изменения расположения на одном кадре по сравнению с другим.</translation>
    </message>
    <message>
        <source>So, if on the 1st shot, the statue occupied the left lower quarter of the screen rather than the same position as on the 2nd shot, then instead of simply appearing for 2 seconds on the 2nd shot, it would appear by growing out of the left lower quarter of the screen.</source>
        <translation>Таким образом, если на первом кадре статуя занимала левую нижнюю четверть экрана, а на втором кадре иную позицию, то вместо простого появления через 2 секунды на 2 кадре она будет увеличиваться из левой нижней четверти экрана.</translation>
    </message>
    <message>
        <source>Using videos:</source>
        <translation>Использование видео:</translation>
    </message>
    <message>
        <source>You should note that videos are paused when they are invisible.</source>
        <translation>Следует отметить, что видео становится на паузу, когда оно невидимо.</translation>
    </message>
    <message>
        <source>Therefore a video can be displayed for several seconds in the 1st shot, then be made invisible and thus paused in a 2nd shot, then be visible in a 3rd shot and resume playing, from where it stopped at the end of the 1st shot.</source>
        <translation>Таким образом, видео может появиться в течение нескольких секунд на первом кадре, затем стать невидимым и поставиться на паузу на втором кадре, а затем снова стать видимым на третьем кадре и продолжить воспроизводиться с того места, где оно остановилось в конце первого кадра.</translation>
    </message>
</context>
<context>
    <name>0015</name>
    <message>
        <source>All shots regulations versus current shot regulations</source>
        <translation>Настройки всех кадров и настройки текущего кадра</translation>
    </message>
    <message>
        <source>&lt;B&gt;The settings which apply to the current shot.&lt;/B&gt; These settings are made shot by shot. So, every shot possesses its own settings and the passage from a shot to the other one is defined by the passage from one setting to an other one creating a shot animation: these are called Ken Burns effects. Here are some some: </source>
        <translation>&lt;B&gt;Настройки, которые применяются к текущему кадру.&lt;/B&gt; Эти настройки применяются кадр за кадром. Так,  каждый кадр имеет свои собственные настройки и переход от одного кадра к другому сопровождается переходом от одних настроек к другим, создавая короткую анимацию: их называют эффектами Кена Бернса. Вот некоторые из них:</translation>
    </message>
    <message>
        <source>Zoom on a portion of the image</source>
        <translation>Увеличение части изображения</translation>
    </message>
    <message>
        <source>Scrolling from a portion of the image to an other one</source>
        <translation>Прокрутка от одной части изображения к другой</translation>
    </message>
    <message>
        <source>Clarification or darkening of a portion of the image</source>
        <translation>Осветление или затемнение части изображения</translation>
    </message>
    <message>
        <source>etc...</source>
        <translation>и др...</translation>
    </message>
    <message>
        <source>There are two types of settings in the &lt;a href=&quot;0119.html&quot;&gt;Slide properties dialog&lt;/a&gt;:</source>
        <translation>В диалоговом окне &lt;a href=&quot;0119.html&quot;&gt;Параметры слайда&lt;/a&gt; есть два типа настроек:</translation>
    </message>
    <message>
        <source>&lt;B&gt;The settings which apply to all shots.&lt;/B&gt; These settings are made globally, that is their effects will be visible on all the shots of the slide. Here are some: </source>
        <translation>&lt;B&gt;Настройки, которые применяются для всех кадров.&lt;/B&gt; Это общие настройки, их воздействие будет видно на всех кадрах слайда. Вот некоторые из них:</translation>
    </message>
    <message>
        <source>Text and text format</source>
        <translation>Текст и форматирование текста</translation>
    </message>
    <message>
        <source>Shape form</source>
        <translation>Форма блока</translation>
    </message>
</context>
<context>
    <name>0016</name>
    <message>
        <source>Style sheets</source>
        <translation>Таблицы стилей</translation>
    </message>
    <message>
        <source>ffDiaporama uses a style sheet system to facilitate the settings for various things.</source>
        <translation>ffDiaporama использует систему таблицы стилей для облегчения настройки различных вещей.</translation>
    </message>
    <message>
        <source>Style sheets exist for:</source>
        <translation>Таблицы стилей существуют для:</translation>
    </message>
    <message>
        <source>Controlling the block coordinates, including the parameters of size, position and block rotation, and also the framing style.</source>
        <translation>Управления координатами блока, которое включает в себя размер, положение и вращение блока, а также стиль кадрирования.</translation>
    </message>
    <message>
        <source>Controlling the block shape, which includes the parameters of form, opacity, shadow and block borders.</source>
        <translation>Управления формой блока, которое включает в себя тип формы, прозрачность, тени и границы блока.</translation>
    </message>
    <message>
        <source>Controlling image framing, which includes the parameters of geometrical constraint and size.</source>
        <translation>Управление кадрированием изображения, которое включает в себя ограничения геометрии и размер.</translation>
    </message>
    <message>
        <source>Formatting text, which includes the parameters of font, character attributes, alignment and text shadow.</source>
        <translation>Форматирование текста, которое включает в себя шрифт, атрибуты символов, выравнивание текста и тень.</translation>
    </message>
    <message>
        <source>Controlling text background, which includes the parameters of background (color, brush, etc.).</source>
        <translation>Управление фоном текста, которое включает в себя тип фона (цвет, кисть и др.).</translation>
    </message>
    <message>
        <source> Open the style menu:</source>
        <translation>Открытие меню стилей:</translation>
    </message>
    <message>
        <source>The first part of the menu lists the known styles. </source>
        <translation>Первая часть меню содержит список существующих стилей.</translation>
    </message>
    <message>
        <source>If the current settings correspond to a known style, this style is marked with an asterisk.</source>
        <translation>Если текущие параметры соответствуют существующему стилю, то этот стиль помечен звездочкой.</translation>
    </message>
    <message>
        <source>The standard styles of ffDiaporama are marked with this icon: </source>
        <translation>Стандартные стили ffDiaporama помечены этим значком:</translation>
    </message>
    <message>
        <source>Standard styles that you have modified and styles which you created are marked with this icon: </source>
        <translation>Стандартные стили, которые вы изменили, и стили, которые вы создали, помечены этим значком:</translation>
    </message>
    <message>
        <source>The second part of the menu allows you to modify the style list. </source>
        <translation>Вторая часть меню позволяет изменять список стилей.</translation>
    </message>
    <message>
        <source>Create a new style: allows you to create a new style with the current settings. When you select this option, a dialog appears asking you to name the new style.</source>
        <translation>Создание нового стиля: позволяет создать новый стиль с текущими параметрами. При выборе этой опции появится диалоговое окно с запросом имени нового стиля.</translation>
    </message>
    <message>
        <source>Modify an existing style: allows you to change the settings of an existing style by using the current settings. When you select this option, the list of known styles appears. Select the style to be modified.</source>
        <translation>Изменение существующего стиля: позволяет изменять параметры существующего стиля на основе текущих параметров. При выборе этой опции появится список известных стилей. Выберите стиль для изменения.</translation>
    </message>
    <message>
        <source>Manage styles: opens the Manage style dialog.</source>
        <translation>Управлением стилями: открывает диалоговое окно Управление стилем.</translation>
    </message>
</context>
<context>
    <name>0020</name>
    <message>
        <source>Interface description</source>
        <translation>Описание интерфейса</translation>
    </message>
    <message>
        <source>The main window</source>
        <translation>Главное окно</translation>
    </message>
    <message>
        <source>The toolbar</source>
        <translation>Панель инструментов</translation>
    </message>
    <message>
        <source>The timeline</source>
        <translation>Линия времени (таймлайн)</translation>
    </message>
    <message>
        <source>The multimedia file browser</source>
        <translation>Мультимедиа Проводник</translation>
    </message>
    <message>
        <source>Application options</source>
        <translation>Настройки программы</translation>
    </message>
    <message>
        <source>Manage devices</source>
        <translation>Управление устройствами</translation>
    </message>
    <message>
        <source>Add or modify a predefined title slide</source>
        <translation>Добавление или изменение слайда из шаблона</translation>
    </message>
    <message>
        <source>Background properties</source>
        <translation>Свойства фона</translation>
    </message>
    <message>
        <source>Chapter properties</source>
        <translation>Свойства главы</translation>
    </message>
    <message>
        <source>Check configuration</source>
        <translation>Проверка конфигурации</translation>
    </message>
    <message>
        <source>Export project</source>
        <translation>Экспорт проекта</translation>
    </message>
    <message>
        <source>Project properties</source>
        <translation>Свойства проекта</translation>
    </message>
    <message>
        <source>Select files</source>
        <translation>Выбор файлов</translation>
    </message>
    <message>
        <source>Correct, reframe or cut image or video</source>
        <translation>Коррекция, кадрирование или обрезка изображения или видео</translation>
    </message>
    <message>
        <source>File information</source>
        <translation>Информация о файле</translation>
    </message>
    <message>
        <source>Manage favorite</source>
        <translation>Управление избранным</translation>
    </message>
    <message>
        <source>Manage style</source>
        <translation>Управление стилями</translation>
    </message>
    <message>
        <source>Music properties</source>
        <translation>Параметры музыки</translation>
    </message>
    <message>
        <source>Render video</source>
        <translation>Создание видео</translation>
    </message>
    <message>
        <source>Ruler properties</source>
        <translation>Свойства линеек</translation>
    </message>
    <message>
        <source>Edit thumbnail model</source>
        <translation>Изменение шаблона обложки</translation>
    </message>
    <message>
        <source>Set first shot duration for a set of slides</source>
        <translation>Выбор продолжительности первого кадра для группы слайдов</translation>
    </message>
    <message>
        <source>Slide properties</source>
        <translation>Параметры слайда</translation>
    </message>
    <message>
        <source>Edit text</source>
        <translation>Редактирование текста</translation>
    </message>
    <message>
        <source>Select transition duration for a set of slides</source>
        <translation>Выбор продолжительности перехода для группы слайдов</translation>
    </message>
    <message>
        <source>Transition properties</source>
        <translation>Параметры перехода</translation>
    </message>
    <message>
        <source>Dialog boxes</source>
        <translation>Диалоговые окна</translation>
    </message>
    <message>
        <source> This section contains information about using ffDiaporama. </source>
        <translation>Этот раздел содержит информацию о том, как работать в ffDiaporama. </translation>
    </message>
    <message>
        <source>Index</source>
        <translation>Содержание</translation>
    </message>
    <message>
        <source>Configuration dialog boxes</source>
        <translation>Окна настройки программы</translation>
    </message>
    <message>
        <source>Editing dialog boxes</source>
        <translation>Окна редактирования</translation>
    </message>
    <message>
        <source>Dialog boxes related to the project</source>
        <translation>Окна, связанные с проектом</translation>
    </message>
    <message>
        <source>Various dialog boxes</source>
        <translation>Прочие окна</translation>
    </message>
    <message>
        <source>Add or modify a location</source>
        <translation>Добавить или изменить местоположение</translation>
    </message>
    <message>
        <source>Cut a sound file</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>0021</name>
    <message>
        <source>The main window</source>
        <translation>Главное окно</translation>
    </message>
    <message>
        <source>The main window of ffDiaporama allows all the common tasks of slide management.</source>
        <translation>Главное окно ffDiaporama предназначено для выполнения всех общих задач управления слайдами.</translation>
    </message>
    <message>
        <source>The general principle is:</source>
        <translation>Основной принцип:</translation>
    </message>
    <message>
        <source>Add files and titles to the &lt;a href=&quot;0023.html&quot;&gt;timeline&lt;/a&gt; in the form of slides</source>
        <translation>Добавление файлов и заголовков на &lt;a href=&quot;0023.html&quot;&gt; линию времени (таймлайн)&lt;/a&gt; в виде слайдов</translation>
    </message>
    <message>
        <source>Organize slides</source>
        <translation>Организация слайдов</translation>
    </message>
    <message>
        <source>Adjust slides and create animations</source>
        <translation>Управление слайдами и создание анимации</translation>
    </message>
    <message>
        <source>To manage slides, ffDiaporama provides three display modes:</source>
        <translation>Для управления слайдами ffDiaporama предлагает три режима работы:</translation>
    </message>
    <message>
        <source>File mode</source>
        <translation>Режим менеджера файлов</translation>
    </message>
    <message>
        <source>In this mode, the main window is divided into 3 zones: </source>
        <translation>В этом режиме главное окно разделено на 3 зоны:</translation>
    </message>
    <message>
        <source>The &lt;a href=&quot;0023.html&quot;&gt;timeline&lt;/a&gt;</source>
        <translation>&lt;a href=&quot;0023.html&quot;&gt;Линия времени&lt;/a&gt;</translation>
    </message>
    <message>
        <source>The &lt;a href=&quot;0024.html&quot;&gt;multimedia file browser&lt;/a&gt;</source>
        <translation>&lt;a href=&quot;0024.html&quot;&gt;Мультимедиа Проводник&lt;/a&gt;</translation>
    </message>
    <message>
        <source> In this mode, you can display the multimedia files present on your hard disks and insert them using Drag &amp; Drop into the &lt;a href=&quot;0023.html&quot;&gt;timeline&lt;/a&gt; to create your slide show. </source>
        <translation>В этом режиме можно видеть мультимедийные файлы на жестких дисках и вставлять их простым перетаскиванием на &lt;a href=&quot;0023.html&quot;&gt;линию времени&lt;/a&gt; для создания слайд-шоу.</translation>
    </message>
    <message>
        <source>A small multimedia player is displayed above on the right, near the toolbar and menu, to allow you to preview the slide show. </source>
        <translation>Небольшой мультимедиа плеер отображается справа вверху, рядом с панелью инструментов и меню, позволяя вам просматривать слайд-шоу.</translation>
    </message>
    <message>
        <source>Sheet mode</source>
        <translation>Режим таблицы</translation>
    </message>
    <message>
        <source>In this mode, the main window is divided into 2 zones: </source>
        <translation>В этом режиме главное окно разделено на 2 зоны:</translation>
    </message>
    <message>
        <source> In this mode, the &lt;a href=&quot;0023.html&quot;&gt;timeline&lt;/a&gt; is displayed on several lines to show as much slides as possible of the slide show. Slides are shown as on a musical score, in the form of line and at the end of a line, we pass over to the beginning og the following line. </source>
        <translation>В этом режиме &lt;a href=&quot;0023.html&quot;&gt; линия времени&lt;/a&gt; отображается в несколько строк, чтобы показать как можно больше слайдов. Слайды показываются как на музыкальной партитуре - в виде линии, в конце которой мы переходим к началу следующей линии.</translation>
    </message>
    <message>
        <source>You can reorganize your slides by moving them using Drag &amp; Drop within the &lt;a href=&quot;0023.html&quot;&gt;timeline&lt;/a&gt;. </source>
        <translation>Вы можете упорядочивать слайды, перетаскивая их по &lt;a href=&quot;0023.html&quot;&gt;линии времени&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>Preview mode</source>
        <translation>Режим предварительного просмотра</translation>
    </message>
    <message>
        <source>A big multimedia player</source>
        <translation>Большой мультимедиа плеер</translation>
    </message>
    <message>
        <source> In this mode, you can preview your slide show in big size. </source>
        <translation>В этом режиме вы можете просмотреть слайд-шоу в большом размере.</translation>
    </message>
    <message>
        <source>You can modify your slides and preview your changes in the multimedia player </source>
        <translation>Вы можете изменять ваши слайды и просматривать изменения в мультимедиа плеере</translation>
    </message>
    <message>
        <source> Switch display to file mode</source>
        <translation>Переключение экрана в режим менеджера файлов</translation>
    </message>
    <message>
        <source> Switch display to sheet mode</source>
        <translation>Переключение экрана в режим таблицы</translation>
    </message>
    <message>
        <source> Switch display to preview mode</source>
        <translation>Переключение экрана в режим предварительного просмотра</translation>
    </message>
    <message>
        <source>by using contextual menus (right click on an element)</source>
        <translation>с помощью контекстного меню (щелчок правой кнопкой мыши на элементе)</translation>
    </message>
    <message>
        <source>by double clicking on elements of the slide</source>
        <translation>двойным щелчком по элементам слайда</translation>
    </message>
    <message>
        <source>The &lt;a href=&quot;0022.html&quot;&gt;toolbar&lt;/a&gt; and menu at the top</source>
        <translation>&lt;a href=&quot;0022.html&quot;&gt; Панель инструментов&lt;/a&gt; и меню в верху</translation>
    </message>
    <message>
        <source>by using the buttons of the &lt;a href=&quot;0022.html&quot;&gt;toolbar&lt;/a&gt;</source>
        <translation>с помощью кнопок &lt;a href=&quot;0022.html&quot;&gt; панели инструментов&lt;/a&gt;</translation>
    </message>
    <message>
        <source>To change display mode, use the buttons located in the status bar, to the right, at the bottom of the main window.</source>
        <translation>Для изменения режима отображения используйте кнопки, расположенные в строке состояния, правой и нижней частях главного окна.</translation>
    </message>
    <message>
        <source>The editing of slides is done:</source>
        <translation>Редактирование слайдов осуществляется:</translation>
    </message>
</context>
<context>
    <name>0022</name>
    <message>
        <source>The toolbar</source>
        <translation>Панель инструментов</translation>
    </message>
    <message>
        <source>These buttons are grouped under four tabs: File / Project / Render and Help</source>
        <translation>Эти кнопки сгруппированы в четыре вкладки: Файл / Проект / Создание видео и Помощь</translation>
    </message>
    <message>
        <source>The project management commands</source>
        <translation>Кнопки управления проектом</translation>
    </message>
    <message>
        <source>The following table summarizes the main project management commands:</source>
        <translation>В следующей таблице приведены основные команды управления проектом:</translation>
    </message>
    <message>
        <source>Toolbar button</source>
        <translation>Кнопка панели инструментов</translation>
    </message>
    <message>
        <source>Project menu command</source>
        <translation>Команда меню</translation>
    </message>
    <message>
        <source>Keyboard shortcut</source>
        <translation>Сочетание клавиш</translation>
    </message>
    <message>
        <source>Action</source>
        <translation>Действие</translation>
    </message>
    <message>
        <source>New</source>
        <translation>Новый
проект</translation>
    </message>
    <message>
        <source>CTRL+N</source>
        <translation>CTRL+N</translation>
    </message>
    <message>
        <source>(If the current project has unsaved modifications, ffDiaporama prompts you to save it.)</source>
        <translation>( Если в текущем проекте есть несохраненные изменения, ffDiaporama предложит вам сохранить его.)</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Открыть
проект</translation>
    </message>
    <message>
        <source>CTRL+O</source>
        <translation>CTRL+O</translation>
    </message>
    <message>
        <source>Allows you to open an existing project. The file selection dialog appears and allows you to select the project to be opened. </source>
        <translation>Позволяет открыть существующий проект. Появится диалоговое окно выбора файлов, которое позволит вам выбрать проект для открытия.</translation>
    </message>
    <message>
        <source>(If the current project has unsaved modifications, ffDiaporama prompts you to save it.) </source>
        <translation>( Если в текущем проекте есть несохраненные изменения, ffDiaporama предложит вам сохранить его.)</translation>
    </message>
    <message>
        <source>Remark: if the project contains files which were moved or renamed, ffDiaporama will fail to open them again. In that case, a dialog appears allowing you to select a new file.</source>
        <translation>Примечание: если проект содержит файлы, которые были перемещены или переименованы, ffDiaporama не сможет открыть их заново. В этом случае появится диалоговое окно, позволяющее вам выбрать новый файл.</translation>
    </message>
    <message>
        <source>Open recent</source>
        <translation>Открыть
недавний</translation>
    </message>
    <message>
        <source>Allows you to reopen a recently opened project. ffDiaporama stores a list of the last ten projects.</source>
        <translation>Позволяет открыть недавно открытый проект. ffDiaporama сохраняет список последних десяти проектов.</translation>
    </message>
    <message>
        <source>Save</source>
        <translation>Сохранить
проект</translation>
    </message>
    <message>
        <source>CTRL+S</source>
        <translation>CTRL+S</translation>
    </message>
    <message>
        <source>Allows you to save the current project in a project file.</source>
        <translation>Позволяет сохранить текущий проект в файл проекта.</translation>
    </message>
    <message>
        <source>If you have not saved previously the project, a file selection dialog appears and allows you to select a destination file.</source>
        <translation>Если вы раньше не сохраняли проект, появится диалоговое окно выбора файла, позволяющее указать файл назначения.</translation>
    </message>
    <message>
        <source>Save as</source>
        <translation>Сохранить
проект как</translation>
    </message>
    <message>
        <source>Project properties</source>
        <translation>Свойства
проекта</translation>
    </message>
    <message>
        <source>Settings</source>
        <translation>Настройки</translation>
    </message>
    <message>
        <source>Quit</source>
        <translation>Выход</translation>
    </message>
    <message>
        <source>CTRL+W</source>
        <translation>CTRL+W</translation>
    </message>
    <message>
        <source>Allows you to exit ffDiaporama.</source>
        <translation>Позволяет выйти из ffDiaporama.</translation>
    </message>
    <message>
        <source>The slide management commands</source>
        <translation>Кнопки управления слайдами</translation>
    </message>
    <message>
        <source>The following table summarizes the slide management commands:</source>
        <translation>В следующей таблице приведены основные команды управления слайдами:</translation>
    </message>
    <message>
        <source>Edit menu command</source>
        <translation>Команда меню</translation>
    </message>
    <message>
        <source>Add title</source>
        <translation>Добавить слайд</translation>
    </message>
    <message>
        <source>Add files</source>
        <translation>Добавить файлы</translation>
    </message>
    <message>
        <source>INS</source>
        <translation>INS</translation>
    </message>
    <message>
        <source>Add project</source>
        <translation>Добавить проект</translation>
    </message>
    <message>
        <source>Cut</source>
        <translation>Вырезать</translation>
    </message>
    <message>
        <source>CTRL+X</source>
        <translation>CTRL+X</translation>
    </message>
    <message>
        <source>Copy</source>
        <translation>Копировать</translation>
    </message>
    <message>
        <source>CTRL+C</source>
        <translation>CTRL+C</translation>
    </message>
    <message>
        <source>Allows you to copy the current slide to the clipboard.</source>
        <translation>Позволяет копировать текущий слайд в буфер обмена.</translation>
    </message>
    <message>
        <source>Paste</source>
        <translation>Вставить</translation>
    </message>
    <message>
        <source>CTRL+V</source>
        <translation>CTRL+V</translation>
    </message>
    <message>
        <source>Edit</source>
        <translation>Редактировать</translation>
    </message>
    <message>
        <source>Opens a sub-menu giving access to the slide modification functions</source>
        <translation>Открывает подменю, предоставляющее доступ к функциям редактирования слайдов</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>Удалить</translation>
    </message>
    <message>
        <source>DEL</source>
        <translation>DEL</translation>
    </message>
    <message>
        <source>Allows you to remove the current slide.</source>
        <translation>Позволяет удалить текущий слайд.</translation>
    </message>
    <message>
        <source>Remarks:</source>
        <translation>Примечания:</translation>
    </message>
    <message>
        <source>Inserted slides are either at the end of the project, or after the current slide, depending to the option &quot;add the new slides (at the end of the project or after the current slide) &quot; in the configuration dialog.</source>
        <translation>Вставляемые слайды добавляются либо в конец проекта, либо после текущего слайда, в зависимости от параметра «Положение объекта (в конец проекта или после текущего объекта)» в диалоговом окне Настроек программы.</translation>
    </message>
    <message>
        <source>The render commands</source>
        <translation>Кнопки создания видео</translation>
    </message>
    <message>
        <source>The following table summarizes the main render commands:</source>
        <translation>В следующей таблице приведены основные команды создания видео:</translation>
    </message>
    <message>
        <source>Render menu command</source>
        <translation>Команда меню</translation>
    </message>
    <message>
        <source>Player and Smartphone</source>
        <translation>Плеер и смартфон</translation>
    </message>
    <message>
        <source>Multimedia system</source>
        <translation>Мультимедиа система</translation>
    </message>
    <message>
        <source>For the WEB</source>
        <translation>Интернет</translation>
    </message>
    <message>
        <source>Lossless</source>
        <translation>Сжатие без потерь</translation>
    </message>
    <message>
        <source>Advanced</source>
        <translation>Дополнительно</translation>
    </message>
    <message>
        <source>Remark:</source>
        <translation>Примечание:</translation>
    </message>
    <message>
        <source>The lossless format is readable only by few equipment and generates files of enormous size. Consequently, it is useful only to generate parts of a project which will then be joined into a final project.</source>
        <translation>Формат &quot;без потери качества&quot; предназначен для воспроизведения только на некоторых типах оборудования и создает файлы огромных размеров. Следовательно, он полезен только для создания отдельных частей проекта, которые потом будут добавлены к финальному проекту и снова подвергнутся кодированию.</translation>
    </message>
    <message>
        <source>The help commands</source>
        <translation>Кнопки помощи</translation>
    </message>
    <message>
        <source>The following table summarizes the main help commands:</source>
        <translation>В следующей таблице приведены основные команды помощи:</translation>
    </message>
    <message>
        <source>Help menu command</source>
        <translation>Команда меню</translation>
    </message>
    <message>
        <source>About</source>
        <translation>О программе</translation>
    </message>
    <message>
        <source>Opens the about dialog. This displays information about the release, license and system information</source>
        <translation>Открывает диалоговое окно &quot;О программе&quot;. Оно содержит информацию о версии, лицензии и системную информацию</translation>
    </message>
    <message>
        <source>Support and help (F1)</source>
        <translation>Справка (F1)</translation>
    </message>
    <message>
        <source>Opens the ffDiaporama WIKI index</source>
        <translation>Открывает содержание ffDiaporama WIKI</translation>
    </message>
    <message>
        <source>What&apos;s new</source>
        <translation>Что нового</translation>
    </message>
    <message>
        <source>Opens the Blog/News page from the ffDiaporama website</source>
        <translation>Открывает страницу Новости сайта ffDiaporama</translation>
    </message>
    <message>
        <source>Allows you to create a new blank project. The &lt;a href=&quot;0108.html&quot;&gt;project properties dialog&lt;/a&gt; appears and allows you to setup the new project. </source>
        <translation>Позволяет создать новый пустой проект. Появится диалоговое окно &lt;a href=&quot;0108.html&quot;&gt;Свойства проекта&lt;/a&gt; для настройки нового проекта.</translation>
    </message>
    <message>
        <source>Opens a sub-menu giving you access to the following functions</source>
        <translation>Открывает подменю, предоставляющее доступ к следующим функциям</translation>
    </message>
    <message>
        <source>Save as: Allows you to save the current project in a different file. The &lt;a href=&quot;0109.html&quot;&gt;file selection dialog&lt;/a&gt; appears and allows you to select a destination file.</source>
        <translation>Сохранить как: позволяет сохранить текущий проект в другой файл. Появится диалоговое окно &lt;a href=&quot;0109.html&quot;&gt;выбора файлов&lt;/a&gt; для указания файла назначения.</translation>
    </message>
    <message>
        <source>Export project: Export current project and all used files in a new folder. The &lt;a href=&quot;0107.html&quot;&gt;export project dialog&lt;/a&gt; appears and allows you to setup the export.</source>
        <translation>Экспорт проекта: экспортирует текущий проект и все содержащиеся в нем файлы в новую папку. Появится диалоговое окно &lt;a href=&quot;0107.html&quot;&gt;Экспорт проекта&lt;/a&gt; для настройки экспорта.</translation>
    </message>
    <message>
        <source>Allows you to open the &lt;a href=&quot;0108.html&quot;&gt;project properties dialog&lt;/a&gt;</source>
        <translation>Позволяет открыть диалоговое окно &lt;a href=&quot;0108.html&quot;&gt;Свойства проекта&lt;/a&gt;</translation>
    </message>
    <message>
        <source>Allows you to define applications settings. The &lt;a href=&quot;0101.html&quot;&gt;application settings dialog&lt;/a&gt; appears.</source>
        <translation>Позволяет определить настройки программы. Появится диалоговое окно &lt;a href=&quot;0101.html&quot;&gt;Настройки программы&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>Add empty slide: Allows you to add an empty slide : the new empty slide is appended to the project and is displayed in the &lt;a href=&quot;0023.html&quot;&gt;timeline&lt;/a&gt;.</source>
        <translation>Добавить пустой слайд: позволяет добавить пустой слайд : новый пустой слайд добавляется в проект и отображается на &lt;a href=&quot;0023.html&quot;&gt;линии времени&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>Add a predefined title slide: Allows you to add a slide based on a model. The &lt;a href=&quot;0103.html&quot;&gt;predefined title slide properties dialog&lt;/a&gt; appears.</source>
        <translation>Добавить слайд из шаблона: позволяет добавить слайд на основе шаблона. Появится диалоговое окно &lt;a href=&quot;0103.html&quot;&gt;свойств шаблона заголовков&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>Allows you to add photo or video files : A &lt;a href=&quot;0109.html&quot;&gt;file selection dialog&lt;/a&gt; appears and allows you to select one or more files. </source>
        <translation>Позволяет добавить фото или видео : появится диалоговое окно &lt;a href=&quot;0109.html&quot;&gt;выбора файлов&lt;/a&gt; для выбора одного или нескольких файлов. </translation>
    </message>
    <message>
        <source>Allows you to add the slides of an existing project to the end the current project: a &lt;a href=&quot;0109.html&quot;&gt;file selection dialog&lt;/a&gt; appears and allows you to select a project file. Slides, slide settings, music and background of the project are added to the current project.</source>
        <translation>Позволяет добавить слайды уже существующего проекта в конец текущего проекта: появится диалоговое окно &lt;a href=&quot;0109.html&quot;&gt;выбора файлов&lt;/a&gt; для выбора файла проекта. Слайды, их настройки, музыка и фоны проекта будут добавлены в текущий проект.</translation>
    </message>
    <message>
        <source>Allows you to cut the current slide (remove it from the &lt;a href=&quot;0023.html&quot;&gt;timeline&lt;/a&gt; and put it in the clipboard).</source>
        <translation>Позволяет вырезать текущий слайд (удалить его с &lt;a href=&quot;0023.html&quot;&gt;линии времени&lt;/a&gt; и поместить в буфер обмена).</translation>
    </message>
    <message>
        <source>Open the &lt;a href=&quot;0104.html&quot;&gt;background properties dialog&lt;/a&gt; (Equivalent to a double click on the background track)</source>
        <translation>Открывает диалоговое окно &lt;a href=&quot;0104.html&quot;&gt;Свойства фона&lt;/a&gt; (эквивалентно двойному щелчку на треке фона)</translation>
    </message>
    <message>
        <source>Depending on the slide type, open the &lt;a href=&quot;0119.html&quot;&gt;slide properties dialog&lt;/a&gt; if it&apos;s a standard slide or open the &lt;a href=&quot;0103.html&quot;&gt;predefined title slide properties dialog&lt;/a&gt; if it&apos;s a predefined title slide. (Equivalent to a double click on the mounting track)</source>
        <translation>В зависимости от типа слайда откроется либо диалоговое окно &lt;a href=&quot;0119.html&quot;&gt;Параметры слайда&lt;/a&gt;, если это обычный слайд, либо диалоговое окно &lt;a href=&quot;0103.html&quot;&gt;свойств шаблона заголовка&lt;/a&gt; если это слайд на основе  шаблона заголовков. (эквивалентно двойному щелчку на треке монтажа) </translation>
    </message>
    <message>
        <source>Open the &lt;a href=&quot;0114.html&quot;&gt;music properties dialog&lt;/a&gt; (Equivalent to a double click on the music track)</source>
        <translation>Открывает диалоговое окно &lt;a href=&quot;0114.html&quot;&gt;Параметры музыки&lt;/a&gt; (эквивалентно двойному щелчку на треке музыки)</translation>
    </message>
    <message>
        <source>Open the &lt;a href=&quot;0122.html&quot;&gt;transition properties dialog&lt;/a&gt; (Equivalent to a double click on the transition)</source>
        <translation>Открывает диалоговое окно &lt;a href=&quot;0122.html&quot;&gt;Параметры перехода&lt;/a&gt; (эквивалентно двойному щелчку на переходе)</translation>
    </message>
    <message>
        <source>It is possible to add slides by Drag and Drop directly using the file browser. Drag photos or videos onto the &lt;a href=&quot;0023.html&quot;&gt;timeline&lt;/a&gt; and slides are created at the point you release the files.</source>
        <translation>Можно добавлять слайды путем перетаскивания непосредственно из менеджера файлов. Перетащите фотографии или видео на &lt;a href=&quot;0023.html&quot;&gt;линию времени&lt;/a&gt; и слайды будут созданы там, где вы &quot;бросите&quot; файлы.</translation>
    </message>
    <message>
        <source>Allows you to render the video for selected equipment from the device database. </source>
        <translation>Позволяет создать видео для оборудования, выбранного из базы данных устройств. </translation>
    </message>
    <message>
        <source>The &lt;a href=&quot;0115.html&quot;&gt;render movie dialog&lt;/a&gt; from database appears.</source>
        <translation>Появится диалоговое окно &lt;a href=&quot;0115.html&quot;&gt;создания видео&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>Allows you to render the video in a lossless format. Lossless format is not destructive, so it is possible to render several times the same video without losing in quality. The &lt;a href=&quot;0115.html&quot;&gt;render movie dialog&lt;/a&gt; appears.</source>
        <translation>Позволяет создать видео без потери качества. В этом случае обработка не будет носить ухудшающий характер, что позволяет кодировать одно и то же видео несколько раз без потери качества. Появится диалоговое окно &lt;a href=&quot;0115.html&quot;&gt;Создание видео&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>Allows you to render the video using the &lt;a href=&quot;0115.html&quot;&gt;Advanced render movie dialog&lt;/a&gt;.</source>
        <translation>Позволяет создать видео, используя диалоговое окно &lt;a href=&quot;0115.html&quot;&gt;Дополнительные параметры создания видеофайла&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>Export Soundtrack</source>
        <translation>Экспорт аудио дорожки</translation>
    </message>
    <message>
        <source>Allows you to render only the sound track of the project. The &lt;a href=&quot;0115.html&quot;&gt;render movie dialog&lt;/a&gt; appears.</source>
        <translation>Позволяет создать только звуковую дорожку проекта. Появится диалоговое окно &lt;a href=&quot;0115.html&quot;&gt;Создание видео&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>Note: Each selected file is added to the project using sort order specified in the configuration menu of the multimedia file explorer.</source>
        <translation>Примечание: каждый выделенный файл добавляется в проект, используя порядок сортировки, указанный в меню настроек Мультимедиа Проводника.</translation>
    </message>
    <message>
        <source>Allows you to paste the slide or the image currently in the clipboard into the &lt;a href=&quot;0023.html&quot;&gt;timeline&lt;/a&gt;.</source>
        <translation>Позволяет вставить слайд или изображение из буфера обмена на &lt;a href=&quot;0023.html&quot;&gt;линию времени&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>Add a map: Allows you to add a Google Maps map. The &lt;a href=&quot;0110.html&quot;&gt;correct, reframe or cut image or video dialog&lt;/a&gt; appears.</source>
        <translation>Добавить карту: позволяет добавить карту Google Maps. Появится диалоговое окно &lt;a href=&quot;0110.html&quot;&gt;коррекции, кадрирования или обрезки изображения или видео&lt;/a&gt;.</translation>
    </message>
</context>
<context>
    <name>0023</name>
    <message>
        <source>The timeline</source>
        <translation>Линия времени (таймлайн)</translation>
    </message>
    <message>
        <source>The timeline lists the slides which compose the project. The slides are listed from left to right.</source>
        <translation>На линии времени приведены слайды, составляющие проект. Они воспроизводятся слева направо.</translation>
    </message>
    <message>
        <source>Each slide is represented by the 3 tracks:</source>
        <translation>Каждый слайд представлен 3 треками:</translation>
    </message>
    <message>
        <source>The background track:</source>
        <translation>Трек фона:</translation>
    </message>
    <message>
        <source>An icon corresponding to the transition selected to pass from the previous background to this slide (if a new background is defined). .</source>
        <translation>значок перехода, свидетельствующий о смене фона предыдущего слайда на фон этого слайда (если определен новый фон).</translation>
    </message>
    <message>
        <source>A thumbnail representing the background associated with this slide.</source>
        <translation>миниатюра фона этого слайда.</translation>
    </message>
    <message>
        <source>The slide number.</source>
        <translation>номер слайда.</translation>
    </message>
    <message>
        <source> Possibly this icon may appear at the upper left if the slide is used as chapter start</source>
        <translation>этот значок может появиться  в левом верхнем углу, если слайд является началом новой главы</translation>
    </message>
    <message>
        <source>The mounting track:</source>
        <translation>Трек монтажа:</translation>
    </message>
    <message>
        <source>An icon corresponding to the transition selected to pass from the previous slide to this slide, under which is indicated the duration of the transition in seconds.</source>
        <translation>значок  перехода от предыдущего слайда к этому слайду, под которым указывается продолжительность перехода в секундах.</translation>
    </message>
    <message>
        <source>A thumbnail in the form of a static image for slides consisting of title or photo, or in the form of a video (under which is placed a soundtrack).</source>
        <translation>миниатюра либо в виде изображения для слайдов, состоящих из заголовка или фото, либо в виде пленки под которой помещается саундтрек для видео.</translation>
    </message>
    <message>
        <source> Possibly this icon may appear at the upper left if the slide is composed of several blocks.</source>
        <translation>этот значок может появиться в верхнем левом углу, если слайд состоит из нескольких блоков.</translation>
    </message>
    <message>
        <source> Possibly this icon may appear at the upper right if the slide is animated (that is consisting of more than one shot).</source>
        <translation>этот значок может появиться в верхнем правом углу, если слайд анимирован (состоит из более чем одного кадра).</translation>
    </message>
    <message>
        <source> Possibly this icon may appear at the bottom right if the slide contains at least an image for which you defined a transformation.</source>
        <translation>этот значок может появиться в нижнем правом углу, если слайд содержит по крайней мере изображение для которого определено преобразование.</translation>
    </message>
    <message>
        <source> Possibly this icon may appear at the bottom left if the slide is an automatic predefined slide.</source>
        <translation>этот значок может появиться в нижнем левом углу, если слайд создан на основе шаблона.</translation>
    </message>
    <message>
        <source> Possibly this icon may appear at the bottom right if the predefined slide is a project title slide.</source>
        <translation>этот значок может появиться в нижнем правом углу, если слайд является шаблоном названий проекта.</translation>
    </message>
    <message>
        <source> Possibly this icon may appear at the bottom right if the predefined slide is a chapter title slide.</source>
        <translation>этот значок может появиться в нижнем правом углу, если слайд является шаблоном названий глав.</translation>
    </message>
    <message>
        <source> Possibly this icon may appear at the bottom right if the predefined slide is a generic title slide.</source>
        <translation>этот значок может появиться в нижнем правом углу, если слайд является универсальным шаблоном названий.</translation>
    </message>
    <message>
        <source>Remark: The thumbnail represents the first image on the slide.</source>
        <translation>Примечание: миниатюра представляет собой первое из изображений слайда.</translation>
    </message>
    <message>
        <source>The music track:</source>
        <translation>Трек музыки:</translation>
    </message>
    <message>
        <source>Every play-list is shown by a change of color.</source>
        <translation>Каждый плейлист выделен чередующимся цветом.</translation>
    </message>
    <message>
        <source>The track is more or less filled according to the sound volume selected, displaying the variation in volume.</source>
        <translation>Уровень громкости звука пропорционален толщине (высоте) музыкального трека.</translation>
    </message>
    <message>
        <source>The musical transitions (fade in/out) are shown as crossings.</source>
        <translation>Переход звука (затухание / нарастание) отображается в виде пересечения аудиодорожек.</translation>
    </message>
    <message>
        <source>Remark: Possible pauses are symbolized by a change in the volume to zero and the display of this icon: </source>
        <translation>Примечание: постановка звука на паузу показывается изменением громкости на ноль и отображением этого значка: </translation>
    </message>
    <message>
        <source>To modify an element:</source>
        <translation>Изменение элементов:</translation>
    </message>
    <message>
        <source>You can also call a contextual menu by doing a right click ahead the thumbnail or click on the Edit button. This contextual menu allows you to select an action.</source>
        <translation>Также вы можете вызвать контекстное меню, щелкнув правой кнопкой мыши на миниатюре или нажав кнопку Редактировать. Контекстное меню позволяет вам выбрать нужное действие.</translation>
    </message>
    <message>
        <source>To modify several elements at one time:</source>
        <translation>Одновременное изменение нескольких элементов:</translation>
    </message>
    <message>
        <source>You can select several slides by using the mouse and the CTRL and SHIFT:</source>
        <translation>Вы можете выделить несколько слайдов мышью, держа зажатой клавишу CTRL или SHIFT:</translation>
    </message>
    <message>
        <source>CTRL + click on a slide: add or removes the slide of the selection</source>
        <translation>CTRL + щелчок на слайде: добавление или удаление слайда из выделения</translation>
    </message>
    <message>
        <source>SHIFT + click on a slide: add all the slides understood between the last one selected and the slide which you have just clicked</source>
        <translation>SHIFT + щелчок на слайде: добавление всех слайдов, расположенных между выделенным сейчас слайдом и слайдом на котором вы щелкнули</translation>
    </message>
    <message>
        <source>Then, by making a right click on one of the slides of the selection, a contextual menu appears.</source>
        <translation>Затем щелчком правой кнопкой мыши на одном из выделенных слайдов вызывается контекстное меню.</translation>
    </message>
    <message>
        <source>This menu suggests various actions making on all the slides of the selection such as:</source>
        <translation>Это меню предлагает различные действия для всех выделенных слайдов. Например:</translation>
    </message>
    <message>
        <source>Copy/Cut/Paste/Remove all slide of the selection</source>
        <translation>Копировать/вставить/удалить все выделенные слайды</translation>
    </message>
    <message>
        <source>Modify the duration of the 1st shot for all the slides of the selection</source>
        <translation>Изменить длительность первого кадра для всех выделенных слайдов</translation>
    </message>
    <message>
        <source>Modify the transition for all the slides of the selection</source>
        <translation>Изменить переходы для всех выделенных слайдов</translation>
    </message>
    <message>
        <source>Modify the music for all the slides of the selection</source>
        <translation>Изменить музыку для всех выделенных слайдов</translation>
    </message>
    <message>
        <source>etc...</source>
        <translation>и др.</translation>
    </message>
    <message>
        <source>To reorder the slide in the timeline:</source>
        <translation>Изменение порядка слайдов на линии времени:</translation>
    </message>
    <message>
        <source>Simply drag the slide to a new position with the mouse (drag &amp; drop)</source>
        <translation>Просто перетащите слайд мышью на новую позицию</translation>
    </message>
    <message>
        <source>To modify the display of the timeline:</source>
        <translation>Изменение отображения линии времени:</translation>
    </message>
    <message>
        <source>The timeline settings commands are in the status bar, to the right, at the bottom of the main window.</source>
        <translation>Команды настройки линии времени расположены в строке состояния, справа, в нижней части главного окна.</translation>
    </message>
    <message>
        <source> Increases the size of the thumbnails but reduces the number of thumbnails shown in the timeline.</source>
        <translation>Увеличивает размер, но уменьшает количество показываемых на линии времени миниатюр.</translation>
    </message>
    <message>
        <source> Reduces the size of the thumbnails and increases the number of thumbnails shown in the timeline.</source>
        <translation>Уменьшает размер, но увеличивает количество показываемых на линии времени миниатюр.</translation>
    </message>
    <message>
        <source>To modify the background, double-click the thumbnail of the background. This action opens the &lt;a href=&quot;0104.html&quot;&gt;Define background&lt;/a&gt; dialog.</source>
        <translation>Чтобы изменить фон, дважды щелкните на миниатюре фона. Это действие открывает диалоговое окно &lt;a href=&quot;0104.html&quot;&gt; Свойства фона&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>To modify the entering slide transition, double-click the slide transition. This action opens the &lt;a href=&quot;0122.html&quot;&gt;Define the entering slides transitions&lt;/a&gt; dialog.</source>
        <translation>Чтобы изменить переход, дважды щелкните на переходе слайда. Это действие открывает диалоговое окно &lt;a href=&quot;0122.html&quot;&gt; Параметры перехода&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>To modify the music associated with the slide, double-click the zone corresponding to the slide musical track. This action opens the &lt;a href=&quot;0114.html&quot;&gt;Define the music track&lt;/a&gt; dialog.</source>
        <translation>Чтобы изменить музыку, связанную со слайдом, дважды щелкните в зоне, соответствующей музыкальному треку слайда. Это действие открывает диалоговое окно &lt;a href=&quot;0114.html&quot;&gt;Параметры музыки&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>To modify the slide (framing, filter, animation, etc.) double-click the thumbnail. This action opens the &lt;a href=&quot;0119.html&quot;&gt;slides properties dialog&lt;/a&gt; if it&apos;s a standard slide or open the &lt;a href=&quot;0103.html&quot;&gt;predefined title slide properties dialog&lt;/a&gt; if it&apos;s a predefined title slide.</source>
        <translation>Для изменения слайда (кадрирование, фильтры, анимация, и т.д.) дважды щелкните его миниатюру. Это действие открывает &lt;a href=&quot;0119.html&quot;&gt; диалоговое окно Параметры слайда&lt;/a&gt;, если это обычный слайд или &lt;a href=&quot;0103.html&quot;&gt; диалоговое окно свойств шаблонов слайда&lt;/a&gt;, если это заголовок, созданный на основе шаблона.</translation>
    </message>
    <message>
        <source>To select the current slide:</source>
        <translation>Выбор текущего слайда:</translation>
    </message>
    <message>
        <source>Click on a slide to define it as current slide.</source>
        <translation>Щелкните на слайде, чтобы выбрать его в качестве текущего слайда.</translation>
    </message>
    <message>
        <source>Use the mouse wheel to change the current slide.</source>
        <translation>Используйте колесико мышки, чтобы изменить текущий слайд.</translation>
    </message>
    <message>
        <source>Note: When previewing the selected slide is automatically defined on the current slide preview.</source>
        <translation>Примечание: при предварительном просмотре выделенный слайд автоматически определяется как текущий.</translation>
    </message>
    <message>
        <source>On slide associated with the music, the cover, artist and song title are displayed</source>
        <translation>На слайдах, содержащих музыку, отображаются обложка, исполнитель и название песни</translation>
    </message>
    <message>
        <source>To move the music or the background associated to a slide to another slide:</source>
        <translation>Перемещение музыки или фонового изображения с одного слайда на другой:</translation>
    </message>
    <message>
        <source>Simply drag the music or background to a new position with the mouse (drag &amp; drop)</source>
        <translation>Просто перетащите мышкой музыку или фоновое изображение на новое место</translation>
    </message>
</context>
<context>
    <name>0024</name>
    <message>
        <source>The multimedia file browser</source>
        <translation>Мультимедиа Проводник</translation>
    </message>
    <message>
        <source>ffDiaporama offers a multimedia file browser which is shown in the main window when you select the file browser mode in the main window. It is designed for quick access to the multimedia files on your computer.</source>
        <translation>ffDiaporama предлагает мультимедийный менеджер файлов, который появляется в главном окне, когда вы переключаетесь в режим менеджера файлов. Он предназначен для быстрого доступа к мультимедийным файлам на вашем компьютере.</translation>
    </message>
    <message>
        <source>The main advantages are, that you can view the multimedia information of specific files even without or before adding them to your project. For instance, you can filter the view to obtain information of only photos, video files or music files.</source>
        <translation>Основное его преимущество состоит в том, что вы можете просмотреть мультимедиа информацию о конкретных файлах перед их добавлением в проект (без добавления). Например, можно настроить отображение только фотографий, видео или музыкальных файлов.</translation>
    </message>
    <message>
        <source>And moreover, you can select one or more multimedia files and add them to your project with drag &amp; drop.</source>
        <translation>Кроме того, можно выбрать один или несколько мультимедиа файлов и добавить их в проект с помощью перетаскивания.</translation>
    </message>
    <message>
        <source>The main purpose of the file browser is therefore the viewing and use of (multimedia) files. Some file management tasks are integrated for your convenience, i.e. creating folders deleting files or folders and renaming files or folders.</source>
        <translation>Основная цель менеджера файлов - просмотр и использование (мультимедиа) файлов. Для вашего удобства встроены некоторые задачи управления файлами: создание папок, удаление файлов или папок и переименования файлов или папок.</translation>
    </message>
    <message>
        <source>Remark:</source>
        <translation>Примечание:</translation>
    </message>
    <message>
        <source>Files can be presented differently than by the system file browser (presence of filters showing only some files - management of the file/icon pairs - etc.)</source>
        <translation>Файлы могут быть представлены иначе, чем в системном менеджере файлов (наличие фильтров отображения только некоторых файлов, управление парами файл - значок,  и др.)</translation>
    </message>
    <message>
        <source>The multimedia file browser follows the display rules used by the majority of multimedia systems (gateway, multimedia hard drive, etc.): </source>
        <translation>Мультимедиа Проводник использует следующие правила отображения основных мультимедиа систем (шлюз, мультимедийный жесткий диск, и др.):</translation>
    </message>
    <message>
        <source>If a drive or a folder contains a folder.jpg file, then this image file is used as icon for the drive or the folder</source>
        <translation>Если диск или папка содержат файл folder.jpg, то это изображение используется как значок для диска или папки</translation>
    </message>
    <message>
        <source>If a video or music file is accompanied with an image file with the .jpg extension carrying the same name, then this image file is used as icon for this file (example: holidays.mkv and holidays.jpg in the same folder</source>
        <translation>Если видео или музыкальный файл сопровождаются изображением с расширением .jpg с таким же именем, то это изображение используется как значок для этого файла (например: файлы holidays.mkv и holidays.jpg в одной папке)</translation>
    </message>
    <message>
        <source>The ffDiaporama multimedia file browser is not designed to manage files: so you cannot make copies of files or move files.</source>
        <translation>Мультимедиа Проводник ffDiaporama не предназначен для работы с файлами : вы не cможете копировать и перемещать файлы.</translation>
    </message>
    <message>
        <source> Folder tree</source>
        <translation>Дерево папок</translation>
    </message>
    <message>
        <source>The folder tree shows the drives and folders of your system. Under every drive the folders of that drive are listed, then under every folder the subfolders, if present and so on.</source>
        <translation>Дерево папок показывает диски и папки вашей системы. Под каждым диском перечислены папки этого диска, а под каждой папкой - вложенные в нее папки, если они есть,  и так далее.</translation>
    </message>
    <message>
        <source>You can:</source>
        <translation>Вы можете:</translation>
    </message>
    <message>
        <source>Click a drive or a folder to select it</source>
        <translation>Щелкнуть на диске или папке для их выделения</translation>
    </message>
    <message>
        <source>Click the triangle preceding the drive name or folder name to display or hide the list of subfolders</source>
        <translation>Нажать на треугольник возле имени диска или папки для отображения или скрытия списка вложенных папок</translation>
    </message>
    <message>
        <source>Make a right click on a drive or a folder to call the contextual menu on this drive or folder. The contextual menu proposes then the following options:</source>
        <translation>Щелкнуть правой кнопкой мыши на диске или папке для вызова контекстного меню этого диска или папки. В контекстном меню доступны следующие опции:</translation>
    </message>
    <message>
        <source>&lt;B&gt;Refresh all&lt;/B&gt; to update the whole tree (as so if you have to insert a CD-ROM, a DVD or an USB drive, this one is shown in the tree)</source>
        <translation>&lt;B&gt;Обновить все&lt;/B&gt;, чтобы обновить все дерево (если вы вставите CD-ROM, DVD или USB-накопитель, то после этого он отобразится в дереве)</translation>
    </message>
    <message>
        <source>&lt;B&gt;Refresh from here&lt;/B&gt; to update the tree from this folder (update only what is under this folder)</source>
        <translation>&lt;B&gt;Обновить выделенное&lt;/B&gt; для обновления дерева этой папки (обновить только то, что находится в этой папке)</translation>
    </message>
    <message>
        <source>Create a new folder</source>
        <translation>Создать новую папку</translation>
    </message>
    <message>
        <source>Remove a folder</source>
        <translation>Удалить папку</translation>
    </message>
    <message>
        <source>Rename a folder</source>
        <translation>Переименовать папку</translation>
    </message>
    <message>
        <source>The current folder view lists files and subfolders present in the current folder.</source>
        <translation>В текущей папке показывается список файлов и подкаталогов, содержащихся в ней.</translation>
    </message>
    <message>
        <source>Files are shown:</source>
        <translation>Файлы показываются:</translation>
    </message>
    <message>
        <source>Either as a table with numerous information if you selected the details view in the settings menu of the browser</source>
        <translation> как таблица с подробной информацией, если вы выбрали вид &quot;Подробно&quot;  в меню настроек Проводника</translation>
    </message>
    <message>
        <source>Or as image if you selected the icons view in the settings menu of the browser</source>
        <translation>как изображения, если вы выбрали вид &quot;Значки&quot; в меню настроек Проводника</translation>
    </message>
    <message>
        <source>Files are shown according to the filter of file selection in the settings menu of the browser</source>
        <translation>Файлы отображаются на основе фильтра, выбранного в меню настроек Проводника</translation>
    </message>
    <message>
        <source>Select a file or a folder by clicking it</source>
        <translation>выбрать файл или папку, нажав на него</translation>
    </message>
    <message>
        <source>Select several files or folders by using SHIFT and CTRL keys</source>
        <translation>выбрать несколько файлов или папок с помощью клавиш SHIFT или CTRL</translation>
    </message>
    <message>
        <source>CTRL+Click on a file: Add to the current selection or remove from the current selection</source>
        <translation>CTRL + щелчок на файле: добавляют его к выделению или удаляют его из выделения</translation>
    </message>
    <message>
        <source>SHIFT+Click on a file: Select all the files between the last selected and the one which you have just clicked</source>
        <translation>SHIFT + щелчок на файле: выделяют все файлы, расположенных между выделенным сейчас файлом и файлом на котором вы щелкнули</translation>
    </message>
    <message>
        <source>Double click a file or a folder:</source>
        <translation>двойной щелчок на файле или папке:</translation>
    </message>
    <message>
        <source>If it&apos;s a folder: select it as the current folder and opens it</source>
        <translation>если это папка: выбрать ее в качестве текущей папки и открыть</translation>
    </message>
    <message>
        <source>If it&apos;s a file: open the program that is by default associated with the file type in the system. For example, if you have associated GIMP with .jpg files in the system file browser, then a double click on a .jpg file will open the file with GIMP. (Remark: A double click on a ffDiaporama project file, opens the ffDiaporama project)</source>
        <translation>если это файл: открывает программу, которая ассоциирована с этим типом файла в системе. Например, если GIMP ассоциирован с .jpg файлами в системном менеджере файлов, то двойной щелчок на .jpg файле откроет его в GIMP. (Примечание: двойной щелчок на файле проекта ffDiaporama открывает проект в ffDiaporama)</translation>
    </message>
    <message>
        <source>Perform a right click on one of the files or folders of the selection to open the contextual menu. According to the elements that are present in the selection, the menu will propose different actions</source>
        <translation>выполнить щелчок правой кнопкой мыши на выделенных файлах или папках для вызова контекстного меню. В зависимости от типа элементов, которые выделены, в меню будут доступны различные действия</translation>
    </message>
    <message>
        <source>You can also use Drag &amp; Drop to move selected files towards the timeline to:</source>
        <translation>Также можно перетащить выделенные файлы на линию времени, чтобы:</translation>
    </message>
    <message>
        <source>Add them to the project, if they are images, videos or ffDiaporama project files</source>
        <translation>добавить их в проект, если они являются изображениями, видео или файлами проекта ffDiaporama</translation>
    </message>
    <message>
        <source>Use them as playlist, if they are audio files</source>
        <translation>использовать их в качестве плейлиста, если они являются аудиофайлами</translation>
    </message>
    <message>
        <source>Status bar to the current selection</source>
        <translation>Строка состояния текущего выделения</translation>
    </message>
    <message>
        <source>The status bar to the current selection shows information about one or several selected files.</source>
        <translation>Строка состояния текущего выделения показывает информацию об одном или нескольких выделенных файлах.</translation>
    </message>
    <message>
        <source>For a single file selection, the following information is shown:</source>
        <translation>Если выделен один файл, отображается следующая информация:</translation>
    </message>
    <message>
        <source>Image of the file</source>
        <translation>Миниатюра файла</translation>
    </message>
    <message>
        <source>Filename (Filesize)</source>
        <translation>Имя файла (размер файла)</translation>
    </message>
    <message>
        <source>According to the file type: </source>
        <translation>В зависимости от типа файла:</translation>
    </message>
    <message>
        <source>Image: Information about the size of the image / copyright / camera / orientation </source>
        <translation>Изображение: информация о размере / авторском праве / камере / ориентации</translation>
    </message>
    <message>
        <source>Video: Information about the format of the images / the video track / the audio track / duration </source>
        <translation>Видео: информация о формате изображения / видео дорожке / аудио дорожке / продолжительности</translation>
    </message>
    <message>
        <source>Music: Information about the audio format / duration </source>
        <translation>Музыка: информация об аудио формате / продолжительности</translation>
    </message>
    <message>
        <source>ffDiaporama project: Version of ffDiaporama / Format / Number of slide and chapter / duration of the project </source>
        <translation>Проект ffDiaporama : версия ffDiaporama / формат / количество слайдов и глав / продолжительность проекта</translation>
    </message>
    <message>
        <source>Image : Information about the picture shooting (Aperture and Focal / Lens / With or without flash) </source>
        <translation>Изображение: информация о режиме съемки (диафрагма и фокусное расстояние / объектив / наличие вспышки)</translation>
    </message>
    <message>
        <source>Video: TAG contents (Title / Artist / Album / Year) </source>
        <translation>Видео: содержимое тегов (название / исполнитель / альбом / год)</translation>
    </message>
    <message>
        <source>Music: TAG contents (Title / Artist / Album / Year) </source>
        <translation>Музыка: содержимое тегов (название / исполнитель / альбом / год)</translation>
    </message>
    <message>
        <source>ffDiaporama project: TAG contents (Title / Artist / Album / Year) </source>
        <translation>Проект ffDiaporama: содержимое тегов (название / исполнитель / альбом / год)</translation>
    </message>
    <message>
        <source>For a multiple files selection, the following information is shown:</source>
        <translation>Если выделено несколько файлов, отображается следующая информация:</translation>
    </message>
    <message>
        <source>Icon of the file type</source>
        <translation>Значок типа файла</translation>
    </message>
    <message>
        <source>Number of files and type of files</source>
        <translation>Количество файлов и тип файлов</translation>
    </message>
    <message>
        <source>Durations accumulated by files</source>
        <translation>Общая продолжительность файлов</translation>
    </message>
    <message>
        <source>Size accumulated by files</source>
        <translation>Общий размер файлов</translation>
    </message>
    <message>
        <source>Status bar of the current folder</source>
        <translation>Строка состояния текущей папки</translation>
    </message>
    <message>
        <source>The status bar of the current folder shows the following information about the current folder:</source>
        <translation>Строка состояния текущей папки показывает следующую информацию о текущей папке:</translation>
    </message>
    <message>
        <source> Number of files</source>
        <translation>Количество файлов</translation>
    </message>
    <message>
        <source> Number of sub-folders</source>
        <translation>Количество подкаталогов</translation>
    </message>
    <message>
        <source> Total size of shown files</source>
        <translation>Общий размер отображаемых файлов</translation>
    </message>
    <message>
        <source> Total duration of shown files</source>
        <translation>Общая продолжительность отображаемых файлов</translation>
    </message>
    <message>
        <source>Space occupied on the disk / Total space of the disk</source>
        <translation>Занято на диске / общий размер диска</translation>
    </message>
    <message>
        <source> Favorites menu</source>
        <translation>Меню Избранное</translation>
    </message>
    <message>
        <source>The list of the favourite folders can be managed in the favorites menu.</source>
        <translation>Списком Избранных папок можно управлять из меню избранного.</translation>
    </message>
    <message>
        <source>First line of the menu: </source>
        <translation>Первая строка меню: </translation>
    </message>
    <message>
        <source>&lt;U&gt;&lt;B&gt; Add to favorite&lt;/B&gt;&lt;/U&gt; adds the current folder to the list. Then an edit box allows you to give a name for this favorite</source>
        <translation>&lt;U&gt;&lt;B&gt;Добавить в избранное&lt;/B&gt;&lt;/U&gt; добавляет текущую папку в список. Затем вам потребуется указать ее имя в избранном</translation>
    </message>
    <message>
        <source>Between the first and the last line: </source>
        <translation>Между первой и последней строкой: </translation>
    </message>
    <message>
        <source> &lt;U&gt;&lt;B&gt;The list of favorites folders&lt;/B&gt;&lt;/U&gt; is displayed. Select one of the favorite folders to access it directly</source>
        <translation>отображается &lt;U&gt;&lt;B&gt;Список Избранных папок&lt;/B&gt;&lt;/U&gt;. Выберите одну из Избранных папок для непосредственного перехода в нее</translation>
    </message>
    <message>
        <source>Last line of the menu: </source>
        <translation>Последняя строка меню: </translation>
    </message>
    <message>
        <source>&lt;U&gt;&lt;B&gt; Manage favorite&lt;/B&gt;&lt;/U&gt; allows to rename or to delete entries of the list. A dialogbox for the modification of the list is displayed</source>
        <translation>&lt;U&gt;&lt;B&gt;Управление избранным&lt;/B&gt;&lt;/U&gt; позволяет переименовать или удалить Избранное. Появится диалоговое окно для изменения списка</translation>
    </message>
    <message>
        <source> Settings menu</source>
        <translation>Меню настроек</translation>
    </message>
    <message>
        <source>The settings menu allows to modify the display of the current folder:</source>
        <translation>Меню настроек позволяет изменить отображение текущей папки:</translation>
    </message>
    <message>
        <source>Settings of the display mode</source>
        <translation>Настройки режима отображения</translation>
    </message>
    <message>
        <source>Details view</source>
        <translation>Подробно</translation>
    </message>
    <message>
        <source>Switch the display of the current folder to detail mode. In this mode, the present elements in the folder are shown in a table with numerous information</source>
        <translation>Переключает отображение текущей папки в подробный режим. В этом режиме имеющиеся в папке элементы представлены в виде таблице с многочисленной информацией</translation>
    </message>
    <message>
        <source>Icon view</source>
        <translation>Значки</translation>
    </message>
    <message>
        <source>Switch the display of the current folder to icon mode. In this mode, the present elements in the folder are shown as images</source>
        <translation>Переключает отображение текущей папки в режим значков. В этом режиме имеющиеся в папке элементы представлены в виде изображений</translation>
    </message>
    <message>
        <source>Settings of the filter on files</source>
        <translation>Настройки фильтрации файлов</translation>
    </message>
    <message>
        <source>All files</source>
        <translation>Все файлы</translation>
    </message>
    <message>
        <source>Show all the present elements in the current folder</source>
        <translation>Показывает все имеющиеся в текущей папке элементы</translation>
    </message>
    <message>
        <source>Managed files</source>
        <translation>Поддерживаемые файлы</translation>
    </message>
    <message>
        <source>Limit the display to the usable elements of the current folder:</source>
        <translation>Ограничивает отображение имеющихся в текущей папке элементов:</translation>
    </message>
    <message>
        <source>Image, video and audio files of which the format is recognized by ffDiaporama</source>
        <translation>изображениями, видео и аудио файлами, поддерживаемых ffDiaporama форматов</translation>
    </message>
    <message>
        <source>Subfolders</source>
        <translation>подпапками</translation>
    </message>
    <message>
        <source>Image files</source>
        <translation>Изображения</translation>
    </message>
    <message>
        <source>Limit the display of the current folder to the image files of which the format is recognized by ffDiaporama in the present subfolders</source>
        <translation>Ограничивает отображение текущей папки только изображениями, поддерживаемых ffDiaporama форматов</translation>
    </message>
    <message>
        <source>Video files</source>
        <translation>Видео файлы</translation>
    </message>
    <message>
        <source>Limit the display of the current folder to the video files of which the format is recognized by ffDiaporama in the present subfolders</source>
        <translation>Ограничивает отображение текущей папки только видео файлами, поддерживаемых ffDiaporama форматов</translation>
    </message>
    <message>
        <source>Audio files</source>
        <translation>Аудио файлы</translation>
    </message>
    <message>
        <source>Limit the display of the current folder to the audio files of which the format is recognized by ffDiaporama inthe present subfolders</source>
        <translation>Ограничивает отображение текущей папки только аудио файлами, поддерживаемых ffDiaporama форматов</translation>
    </message>
    <message>
        <source>ffDiaporama projects</source>
        <translation>Файлы проектов ffDiaporama</translation>
    </message>
    <message>
        <source>Limit the display of the current folder to the ffDiaporama project files in the present subfolders</source>
        <translation>Ограничивает отображение текущей папки только файлами проектов ffDiaporama</translation>
    </message>
    <message>
        <source>Additional settings</source>
        <translation>Дополнительные настройки</translation>
    </message>
    <message>
        <source>Display hidden files and folders</source>
        <translation>Показать скрытые файлы и папки</translation>
    </message>
    <message>
        <source>Show or hide the hidden files and folders. </source>
        <translation>Показывает или скрывает скрытые файлы и папки. </translation>
    </message>
    <message>
        <source>Under Windows, hidden files and folders have the &lt;B&gt;Hide&lt;/B&gt; file attribute activated. </source>
        <translation>В Windows скрытые файлы и папки имеют атрибут &lt;B&gt;Скрытый&lt;/B&gt;. </translation>
    </message>
    <message>
        <source>Under Linux, hidden files and folders have a name beginning with a dot &quot;.&quot; </source>
        <translation>В Linux названия скрытых файлов и папок начинаются точкой &quot;.&quot; </translation>
    </message>
    <message>
        <source>This option accumulates both versions for both systems. So, even under Windows, files and folders with a name beginning with a &quot;.&quot; are considered as hidden files or folders. </source>
        <translation>Этот параметр поддерживает оба вида скрытия. Так, даже в Windows, файлы и папки имя которых начинается с &quot;.&quot;, рассматриваются как скрытые файлы или папки. </translation>
    </message>
    <message>
        <source>Remark: </source>
        <translation>Примечание: </translation>
    </message>
    <message>
        <source> or </source>
        <translation> или </translation>
    </message>
    <message>
        <source> One of this icon is displayed in front of the name of the option as this one is activated or not.</source>
        <translation>один из этих значков отображается перед названием параметра в зависимости от того активирован он или нет.</translation>
    </message>
    <message>
        <source>Hide filename</source>
        <translation>Скрыть имена файлов</translation>
    </message>
    <message>
        <source>This option is available only for the icon view mode. If this option is activated, the file names will not be shown under the file images. It allows to increase the number of images shown in the view of the current directory. </source>
        <translation>Этот параметр доступен только для режима Значки. Если эта опция активирована, имена файлов не будут отображаться. Это позволяет увеличить количество отображаемых в данном режиме элементов. </translation>
    </message>
    <message>
        <source>Sort by number</source>
        <translation>Сортировать по номеру</translation>
    </message>
    <message>
        <source>This option sorts the files in order of their numerical suffix : Example: if you select IMG_0025, IMG_0032, MVI_0029 and MVI_0040, the files will be inserted as follows : IMG_0025, MVI_0029, IMG_0032 and MVI_0040</source>
        <translation>Сортирует файлы по их численным суффиксам. Например, если вы выберите IMG_0025, IMG_0032, MVI_0029 и MVI_0040, то файлы будут вставлены следующим образом: IMG_0025, MVI_0029, IMG_0032 и MVI_0040</translation>
    </message>
    <message>
        <source>Sort by name</source>
        <translation>Сортировать по имени</translation>
    </message>
    <message>
        <source>This option sorts the files in alphabetical order</source>
        <translation>Сортирует файлы в алфавитном порядке</translation>
    </message>
    <message>
        <source>Sort by date</source>
        <translation>Сортировать по дате</translation>
    </message>
    <message>
        <source>This option sorts the files in order of last modification date</source>
        <translation>Сортирует файлы по дате последнего изменения</translation>
    </message>
    <message>
        <source>Show folder first</source>
        <translation>Сначала показывать папки</translation>
    </message>
    <message>
        <source>If this option is enabled, the directories will be displayed first</source>
        <translation>Если установлен этот параметр, то сначала будут показаны папки, а потом файлы</translation>
    </message>
    <message>
        <source>Settings of the sort order</source>
        <translation>Настройки порядка сортировки</translation>
    </message>
    <message>
        <source>This option sorts the files in order of their creation date</source>
        <translation>Сортирует файлы по дате их создания</translation>
    </message>
    <message>
        <source>Image vector files</source>
        <translation>Векторные изображения</translation>
    </message>
    <message>
        <source>Limit the display of the current folder to the image vector files of which the format is recognized by ffDiaporama in the present subfolders</source>
        <translation>Ограничивает отображение текущей папки только векторными изображениями, поддерживаемых ffDiaporama форматов</translation>
    </message>
</context>
<context>
    <name>0030</name>
    <message>
        <source>Rendering videos</source>
        <translation>Создание видео</translation>
    </message>
    <message>
        <source>Smartphones and tablets</source>
        <translation>Смартфоны и планшеты</translation>
    </message>
    <message>
        <source>Portable devices</source>
        <translation>Портативные устройства</translation>
    </message>
    <message>
        <source>Multimedia system (Home cinema)</source>
        <translation>Мультимедиа система (домашний кинотеатр)</translation>
    </message>
    <message>
        <source>For the WEB</source>
        <translation>Интернет</translation>
    </message>
    <message>
        <source>Video codec</source>
        <translation>Видео кодек</translation>
    </message>
    <message>
        <source>Audio codec</source>
        <translation>Аудио кодек</translation>
    </message>
    <message>
        <source>Containers</source>
        <translation>Контейнеры</translation>
    </message>
    <message>
        <source>Video standards and resolutions</source>
        <translation>Видео стандарты и разрешения</translation>
    </message>
    <message>
        <source>File attachments (Thumbnails, nfo, etc...)</source>
        <translation>Присоединяемые файлы (обложка, nfo, и др.)</translation>
    </message>
    <message>
        <source> This section contains information about generating video with ffDiaporama. </source>
        <translation>Этот раздел содержит информацию о создании видеофайлов в ffDiaporama. </translation>
    </message>
    <message>
        <source>Index</source>
        <translation>Содержание</translation>
    </message>
</context>
<context>
    <name>0031</name>
    <message>
        <source>Rendering videos</source>
        <translation>Создание видео</translation>
    </message>
    <message>
        <source>A digital video consists of a computer file called the &lt;a href=&quot;0038.html&quot;&gt;container&lt;/a&gt;</source>
        <translation>Цифровое видео представляет собой компьютерный файл, называемый &lt;a href=&quot;0038.html&quot;&gt; контейнер&lt;/a&gt;</translation>
    </message>
    <message>
        <source>In this file we find:</source>
        <translation>В этом файле мы найдем:</translation>
    </message>
    <message>
        <source>One or more video tracks. Each track is built using a &lt;a href=&quot;0036.html&quot;&gt;Video Codec&lt;/a&gt;</source>
        <translation>Один или несколько видео треков. Каждый из них создан  с помощью &lt;a href=&quot;0036.html&quot;&gt;видео кодека&lt;/a&gt;</translation>
    </message>
    <message>
        <source>One or more audio tracks. Each track is built using an &lt;a href=&quot;0037.html&quot;&gt;Audio Codec&lt;/a&gt;</source>
        <translation>Один или несколько аудио треков. Каждый из них создан с помощью &lt;a href=&quot;0037.html&quot;&gt;аудио кодека&lt;/a&gt;</translation>
    </message>
    <message>
        <source>Possibly, one or more subtitles. Each subtitle is built in a subtitle format.</source>
        <translation>Возможно, один или несколько субтитров. Каждый из них создан в формате субтитров.</translation>
    </message>
    <message>
        <source>Possibly, a definition of tags and chapters.</source>
        <translation>Возможно, определены теги и главы.</translation>
    </message>
    <message>
        <source>Limitations :</source>
        <translation>Ограничения:</translation>
    </message>
    <message>
        <source>ffDiaporama does not manage subtitles.</source>
        <translation>ffDiaporama не может управлять субтитрами.</translation>
    </message>
    <message>
        <source>ffDiaporama generates files that include a single video track and a single audio track.</source>
        <translation>ffDiaporama создает файлы, включающие один  видео трек и один аудио трек.</translation>
    </message>
    <message>
        <source>Unlike music files, which are widely portable from one device to another, videos require a certain amount of juggling between various formats to adapt to the equipment used to play them.</source>
        <translation>В отличие от аудио файлов, которые легко воспроизводятся на разных устройствах, при создании видео файлов требуется выбирать между разными форматами для адаптации к оборудованию, на котором будет воспроизводиться видео.</translation>
    </message>
    <message>
        <source>A video rendered for a &quot;Home Cinema&quot; device can occupy several Gb and will be unreadable on a smartphone.</source>
        <translation>Видеофайлы, создаваемые для устройств типа &quot;Домашний кинотеатр&quot;  могут занимать несколько Гб и не воспроизводиться на смартфонах.</translation>
    </message>
    <message>
        <source>The same video rendered for a smartphone will require only one Mb, and can be played on a &quot;Home Cinema&quot; device but it will look ugly.</source>
        <translation>То же видео, созданное для смартфона, будет занимать несколько Мб и может воспроизводиться на &quot;Домашнем кинотеатре&quot;, но будет выглядеть некрасиво.</translation>
    </message>
    <message>
        <source>That is why we recommend that you preserve your original project files as far as possible, and create from them videos suitable for the devices you wish to use for playback.</source>
        <translation>Поэтому мы рекомендуем сохранять ваши исходные файлы проекта, если это возможно, и создавать из них видеофайлы, подходящие для устройств, на которых вы хотите их воспроизводить.</translation>
    </message>
    <message>
        <source>To simplify settings for the rendering operation, ffDiaporama contains predefined settings for the following devices:</source>
        <translation>Для упрощения настройки создания видеофайлов ffDiaporama содержит предустановленные настройки для следующих устройств:</translation>
    </message>
    <message>
        <source>&lt;a href=&quot;0032.html&quot;&gt;Smartphones&lt;/a&gt; and &lt;a href=&quot;0033.html&quot;&gt;portable devices&lt;/a&gt;, and small video-playing devices in general</source>
        <translation>&lt;a href=&quot;0032.html&quot;&gt;Смартфоны&lt;/a&gt; и &lt;a href=&quot;0033.html&quot;&gt;портативные устройства&lt;/a&gt;, а также все набольшие устройства воспроизведения видео</translation>
    </message>
    <message>
        <source>&lt;a href=&quot;0034.html&quot;&gt;Multimedia systems&lt;/a&gt; for domestic use (&quot;Home Cinema&quot; devices)</source>
        <translation>&lt;a href=&quot;0034.html&quot;&gt;Мультимедиа системы&lt;/a&gt; для домашнего использования (устройства типа &quot;Домашний кинотеатр&quot;)</translation>
    </message>
    <message>
        <source>&lt;a href=&quot;0035.html&quot;&gt;Display on the Web&lt;/a&gt; (blogs, picture-sharing and social networking sites)</source>
        <translation>&lt;a href=&quot;0035.html&quot;&gt;Интернет&lt;/a&gt; (блоги, хостинги изображений и социальные сети)</translation>
    </message>
    <message>
        <source>It is also possible for you to define all parameters directly by using the advanced option.</source>
        <translation>Также можно определить все параметры вручную, используя дополнительные настройки.</translation>
    </message>
</context>
<context>
    <name>0032</name>
    <message>
        <source>Smartphones and tablets</source>
        <translation>Смартфоны и планшеты</translation>
    </message>
    <message>
        <source>Generally speaking the main differences between these devices are:</source>
        <translation>Основные отличия  этих устройств заключаются в:</translation>
    </message>
    <message>
        <source>Screen size and maximal resolution</source>
        <translation>Размере экрана и максимальном разрешении</translation>
    </message>
    <message>
        <source>Operating system on the device</source>
        <translation>Операционной системе устройства</translation>
    </message>
    <message>
        <source>Consult the documentation for your equipment or search the Internet to determine these two characteristics.</source>
        <translation>Обратитесь к документации оборудования или поищите в Интернете, чтобы определить эти две характеристики.</translation>
    </message>
    <message>
        <source>Device type</source>
        <translation>Тип устройства</translation>
    </message>
    <message>
        <source>Operating system</source>
        <translation>Операционная система</translation>
    </message>
    <message>
        <source>Available resolution</source>
        <translation>Доступное разрешение</translation>
    </message>
    <message>
        <source>Remarks</source>
        <translation>Примечания</translation>
    </message>
    <message>
        <source>Smartphone</source>
        <translation>Смартфон</translation>
    </message>
    <message>
        <source>Nokia Symbian System S60</source>
        <translation>Nokia Symbian System S60</translation>
    </message>
    <message>
        <source>QVGA</source>
        <translation>QVGA</translation>
    </message>
    <message>
        <source>VGA</source>
        <translation>VGA</translation>
    </message>
    <message>
        <source>Generally, Nokia phones working with the Symbian operating system and equipped with a camera, are capable of playing videos. Very often, those provided with a keyboard offer a 320x240 resolution (QVGA), while those with only a touch-sensitive screen offer a 640x360 resolution (VGA).</source>
        <translation>Как правило телефоны Nokia работают на операционной системе Symbian и оснащены камерой, способны воспроизводить видео. Телефоны с клавиатурой чаще всего имеют разрешение 320 x 240 (QVGA), а с сенсорным экраном - 640 x 360 (VGA).</translation>
    </message>
    <message>
        <source>Movie format is: Container: MP4 - Video Codec: MPEG4 - Audio Codec: MP3</source>
        <translation>Формат видео:: Контейнер: MP4 - Видео кодек: MPEG4 - Аудио кодек: MP3</translation>
    </message>
    <message>
        <source>Note: Video files should be stored in the &quot;My videos&quot; folder after connecting the telephone to the PC in &quot;mass storage&quot; mode. </source>
        <translation>Примечание: видеофайлы следует сохранять в папке «Мое видео» при подключении телефона к ПК в режиме &quot;накопитель&quot;.</translation>
    </message>
    <message>
        <source>Windows Mobile 6.0/6.1/6.5</source>
        <translation>Windows Mobile 6.0/6.1/6.5</translation>
    </message>
    <message>
        <source>HVGA</source>
        <translation>HVGA</translation>
    </message>
    <message>
        <source>WVGA</source>
        <translation>WVGA</translation>
    </message>
    <message>
        <source>Numerous manufacturers made phones using the Microsoft Windows Mobile 6 operating system (HP, HTC, etc.) between 2006 and 2010.</source>
        <translation>Многие производители делали телефоны на базе операционной системы Microsoft Windows Mobile 6 (HP, HTC и др.) в 2006 - 2010  гг.</translation>
    </message>
    <message>
        <source>Movie format is: Container: 3GP - Video Codec: MPEG4 - Audio Codec: AMR</source>
        <translation>Формат видео: Контейнер: 3GP - Видео кодек: MPEG4 - Аудио кодек: AMR</translation>
    </message>
    <message>
        <source>Note: Store video files in the &quot;My videos&quot; folder having connected the telephone to the PC in &quot;mass storage&quot; mode. </source>
        <translation>Примечание: видеофайлы следует сохранять в папке «Мое видео» при подключении телефона к ПК в режиме &quot;накопитель&quot;.</translation>
    </message>
    <message>
        <source>Windows Phone 7</source>
        <translation>Windows Phone 7</translation>
    </message>
    <message>
        <source>Microsoft Windows Phone 7 is the evolution of Windows Mobil 6</source>
        <translation>Microsoft Windows Phone 7 - это новая версия Windows Mobil 6</translation>
    </message>
    <message>
        <source>Movie format is: Container: MP4 - Video Codec: h264 - Audio Codec: AAC-LC</source>
        <translation>Формат видео: Контейнер: MP4 - Видео кодек: h264 - Аудио кодек: AAC-LC</translation>
    </message>
    <message>
        <source>Android</source>
        <translation>Android</translation>
    </message>
    <message>
        <source>Many manufacturers made or still make phones using the Google Android operating system.</source>
        <translation>Многие производители делали и продолжают делать телефоны на базе операционной системы Google Android.</translation>
    </message>
    <message>
        <source>Apple iOS</source>
        <translation>Apple iOS</translation>
    </message>
    <message>
        <source>iPhone 3G/3GS</source>
        <translation>iPhone 3G/3GS</translation>
    </message>
    <message>
        <source>iPhone 4</source>
        <translation>iPhone 4</translation>
    </message>
    <message>
        <source>HP - WebOs</source>
        <translation>HP - WebOs</translation>
    </message>
    <message>
        <source>WebOs arises from the repurchase of Palm by HP.</source>
        <translation>WebOs появилась после приобретения Palm компанией HP.</translation>
    </message>
    <message>
        <source>&lt;B&gt;To be completed&lt;/B&gt;</source>
        <translation>&lt;B&gt;будет добавлено&lt;/B&gt;</translation>
    </message>
    <message>
        <source>Blackberry OS</source>
        <translation>Blackberry OS</translation>
    </message>
    <message>
        <source>RIM 240</source>
        <translation>RIM 240</translation>
    </message>
    <message>
        <source>Movie format is: Container: AVI - Video Codec: MPEG4 - Audio Codec: MP3</source>
        <translation>Формат видео: Контейнер: AVI - Видео кодек: MPEG4 - Аудио кодек: MP3</translation>
    </message>
    <message>
        <source>Note: store video files in the \Blackberry\Video folder after connecting the telephone to the PC &quot;mass storage&quot; mode.</source>
        <translation>Примечание: видеофайлы следует сохранять в папке \Blackberry\Video при подключении телефона к ПК в режиме &quot;накопитель&quot;.</translation>
    </message>
    <message>
        <source>Samsung BADA</source>
        <translation>Samsung BADA</translation>
    </message>
    <message>
        <source>Tablet</source>
        <translation>Планшет</translation>
    </message>
    <message>
        <source>Android 2.x</source>
        <translation>Android 2.x</translation>
    </message>
    <message>
        <source>Android 3.x</source>
        <translation>Android 3.x</translation>
    </message>
    <message>
        <source>Linux</source>
        <translation>Linux</translation>
    </message>
    <message>
        <source>Tablet examples: Archos 4/5/70/Arnova 10, Dell Streak, Creative ZiiO 7</source>
        <translation>Примеры планшетов: Archos 4/5/70/Arnova 10, Dell Streak, Creative ZiiO 7</translation>
    </message>
    <message>
        <source>XGA</source>
        <translation>XGA</translation>
    </message>
    <message>
        <source>Tablet examples: Archos 101, Samsung Galaxy Tab, HTC Flyer, Hannspree HANNSpad SN10T, Toshiba Folio 100</source>
        <translation>Примеры планшетов: Archos 101, Samsung Galaxy Tab, HTC Flyer, Hannspree HANNSpad SN10T, Toshiba Folio 100</translation>
    </message>
    <message>
        <source>Tablet examples: HP TouchPad</source>
        <translation>Примеры планшетов: HP TouchPad</translation>
    </message>
    <message>
        <source>Tablet examples: ASUS Eee Pad, Motorola Xoom, Packard Bell Liberty Tab, LG Optimus Pad, Archos G9</source>
        <translation>Примеры планшетов: ASUS Eee Pad, Motorola Xoom, Packard Bell Liberty Tab, LG Optimus Pad, Archos G9</translation>
    </message>
    <message>
        <source>iPad</source>
        <translation>iPad</translation>
    </message>
    <message>
        <source>RIM BlackBerry</source>
        <translation>RIM BlackBerry</translation>
    </message>
    <message>
        <source>Playbook</source>
        <translation>Playbook</translation>
    </message>
    <message>
        <source>Netbook/NetPC</source>
        <translation>Нетбук/NetPC</translation>
    </message>
    <message>
        <source>Windows/XP</source>
        <translation>Windows/XP</translation>
    </message>
    <message>
        <source>Require xVid or DivX codec to be installed on the computer.</source>
        <translation>Требуются установленные на компьютер xVid или DivX кодеки.</translation>
    </message>
    <message>
        <source>Windows/Vista</source>
        <translation>Windows/Vista</translation>
    </message>
    <message>
        <source>Windows/7</source>
        <translation>Windows/7</translation>
    </message>
    <message>
        <source>Android/Linux</source>
        <translation>Android/Linux</translation>
    </message>
    <message>
        <source>As far as the resolution is concerned, note that most devices can play videos designed for lower resolution devices without difficulty. </source>
        <translation>В отношении разрешения, обратите внимание, что большинство устройств может воспроизводить видео, предназначенное для устройств с более низким разрешением, без затруднений.</translation>
    </message>
    <message>
        <source>The device models available in ffDiaporama are as follows: </source>
        <translation>В ffDiaporama доступны следующие модели устройств:</translation>
    </message>
</context>
<context>
    <name>0033</name>
    <message>
        <source>Portable devices</source>
        <translation>Портативные устройства</translation>
    </message>
    <message>
        <source>These portable devices are usually very specific. We will not discuss therefore either operating system or resolution.</source>
        <translation>Обычно эти портативные устройства очень специфичны. Поэтому мы не будем обсуждать операционную систему или разрешение.</translation>
    </message>
    <message>
        <source>Device type</source>
        <translation>Тип устройства</translation>
    </message>
    <message>
        <source>Manufacturer/Model</source>
        <translation>Производитель/Модель</translation>
    </message>
    <message>
        <source>Remark</source>
        <translation>Примечание</translation>
    </message>
    <message>
        <source>Portable player</source>
        <translation>Портативный плеер</translation>
    </message>
    <message>
        <source>DVD/DivX portable player (car player or travel player)</source>
        <translation>DVD/DivX портативный плеер (автомобильный плеер или для путешествий)</translation>
    </message>
    <message>
        <source>All these devices use the old DVD/DIVX format with anamorphic resolution 720x576 (PAL) or 720x480 ( NTSC).</source>
        <translation>Все эти устройства используют старый DVD/DIVX формат с анаморфным разрешением 720x576 (PAL) или 720x480 (NTSC).</translation>
    </message>
    <message>
        <source>Movie format is: Container: AVI - Video Codec: MPEG4 - Audio Codec: MP3</source>
        <translation>Формат видео: Контейнер: AVI - Видео кодек: MPEG4 - Аудио кодек: MP3</translation>
    </message>
    <message>
        <source>If the device does not have a USB port, burn a DVD from your video files. Otherwise simply copy your files to a USB pendrive.</source>
        <translation>Если устройство не имеет USB порта, запишите ваши файлы на DVD. В противном случае можно просто скопировать файлы на USB-флешку.</translation>
    </message>
    <message>
        <source>iPod Classic (G5/G6)</source>
        <translation>iPod Classic (G5/G6)</translation>
    </message>
    <message>
        <source>iPod Nano (G3/G4/G5)</source>
        <translation>iPod Nano (G3/G4/G5)</translation>
    </message>
    <message>
        <source>These two portable player were especially designed for music. Therefore, their resolution is only QVGA.</source>
        <translation>Эти два портативных плеера были специально разработаны для музыки. Поэтому их разрешение составляет всего лишь QVGA.</translation>
    </message>
    <message>
        <source>Movie format is: Container: MP4 - Video Codec: h264 - Audio Codec: AAC-LC</source>
        <translation>Формат видео: Контейнер: MP4 - Видео кодек: h264 - Аудио кодек: AAC-LC</translation>
    </message>
    <message>
        <source>Apple iPod Touch</source>
        <translation>Apple iPod Touch</translation>
    </message>
    <message>
        <source>This portable player has a video resolution comparable to the DVD (without anamorphism).</source>
        <translation>Этот портативный плеер имеет разрешение видео, сопоставимое с DVD (без анаморфизма).</translation>
    </message>
    <message>
        <source>Portable LED/LCD TV</source>
        <translation>Портативный LED/LCD TV</translation>
    </message>
    <message>
        <source>These devices, when they support the HD TV, have a real resolution of 1024x576.</source>
        <translation>Эти устройства, если они поддерживают HD TV, имеют реальное разрешение 1024 x 576.</translation>
    </message>
    <message>
        <source>Handheld game console</source>
        <translation>Портативная игровая консоль</translation>
    </message>
    <message>
        <source>Sony PSP</source>
        <translation>Sony PSP</translation>
    </message>
    <message>
        <source>Resolution 320x480 / NTSC</source>
        <translation>Разрешение 320x480 / NTSC</translation>
    </message>
    <message>
        <source>-s 320x480 -b 512000 -ar 24000 -ab 64000 -f psp -r 29.97</source>
        <translation>-s 320x480 -b 512000 -ar 24000 -ab 64000 -f psp -r 29.97</translation>
    </message>
    <message>
        <source>-ac 2 -ar 48000 -acodec libfAAC-LC -ab 128k -r FRAME_RATE -s WIDTHxHEIGHT -vcodec libh264 -vpre slower -vpre main -level 21 -refs 2 -b BIT_RATE -bt BIT_RATE -aspect WIDTH:HEIGHT -f psp</source>
        <translation>-ac 2 -ar 48000 -acodec libfAAC-LC -ab 128k -r FRAME_RATE -s WIDTHxHEIGHT -vcodec libh264 -vpre slower -vpre main -level 21 -refs 2 -b BIT_RATE -bt BIT_RATE -aspect WIDTH:HEIGHT -f psp</translation>
    </message>
</context>
<context>
    <name>0034</name>
    <message>
        <source>Multimedia system (Home cinema)</source>
        <translation>Мультимедиа система (домашний кинотеатр)</translation>
    </message>
    <message>
        <source>Device type</source>
        <translation>Тип устройства</translation>
    </message>
    <message>
        <source>Manufacturer/Model</source>
        <translation>Производитель/Модель</translation>
    </message>
    <message>
        <source>Remark</source>
        <translation>Примечание</translation>
    </message>
    <message>
        <source>TV box of ADSL box</source>
        <translation>ТВ или ADSL приставка</translation>
    </message>
    <message>
        <source>France - Livebox (Orange)</source>
        <translation>France - Livebox (Orange)</translation>
    </message>
    <message>
        <source>All these devices support the old DVD/DIVX format with anamorphic resolution 720x576 (PAL) for the DVD resolution</source>
        <translation>Все эти устройства используют старый DVD/DIVX формат с анаморфным разрешением 720x576 (PAL) вместо DVD разрешения</translation>
    </message>
    <message>
        <source>Movie format is: Container: AVI - Video Codec: MPEG4 - Audio Codec: MP3</source>
        <translation>Формат видео: Контейнер: AVI - Видео кодек: MPEG4 - Аудио кодек: MP3</translation>
    </message>
    <message>
        <source>All these devices support the MP4 format up to the FullHD 1080p resolution</source>
        <translation>Все эти устройства используют MP4 формат с разрешением до FullHD 1080p</translation>
    </message>
    <message>
        <source>Movie format is: Container: MP4 - Video Codec: h264 - Audio Codec: AAC-LC</source>
        <translation>Формат видео: Контейнер: MP4 - Видео кодек: h264 - Аудио кодек: AAC-LC</translation>
    </message>
    <message>
        <source>Copy your video files to a USB pendrive or an external hard disk and use the multimedia player integrated into the menu of the decoder</source>
        <translation>Скопируйте ваши видеофайлы на USB-флешку или внешний жесткий диск и используйте мультимедийный проигрыватель, интегрированный в меню декодера</translation>
    </message>
    <message>
        <source>France - Freebox</source>
        <translation>France - Freebox</translation>
    </message>
    <message>
        <source>France - Neufbox (SFR)</source>
        <translation>France - Neufbox (SFR)</translation>
    </message>
    <message>
        <source>France - Bbox (Bouygues Telecom)</source>
        <translation>France - Bbox (Bouygues Telecom)</translation>
    </message>
    <message>
        <source>Multimedia hard drive and gateway</source>
        <translation>Мультимедийный жесткий диск и шлюз</translation>
    </message>
    <message>
        <source>All manufacturers</source>
        <translation>Все производители</translation>
    </message>
    <message>
        <source>Equipments supporting HD (to verify in the technical specifications of the device) support the MP4 format until the FullHD 1080p resolution</source>
        <translation>Оборудование с поддержкой HD (проверьте технические характеристики устройства) использует MP4 формат с разрешением до FullHD 1080p</translation>
    </message>
    <message>
        <source>Player</source>
        <translation>Плеер</translation>
    </message>
    <message>
        <source>DVD/DivX Player</source>
        <translation>DVD/DivX плеер</translation>
    </message>
    <message>
        <source>These devices only support the old DVD/DIVX format with anamorphic resolution 720x576 (PAL) for the DVD resolution</source>
        <translation>Эти устройства используют старый DVD/DIVX формат с анаморфным разрешением 720x576 (PAL) вместо DVD разрешения</translation>
    </message>
    <message>
        <source>If the device does not have an USB connector: burn a DVD with your video files. Otherwise simply copy your videos files to a USB pendrive.</source>
        <translation>Если устройство не имеет USB порта, запишите ваши файлы на DVD. В противном случае можно просто скопировать файлы на USB-флешку.</translation>
    </message>
    <message>
        <source>BlueRay player</source>
        <translation>BlueRay плеер</translation>
    </message>
    <message>
        <source>&lt;B&gt;To be completed&lt;/B&gt;</source>
        <translation>&lt;B&gt;будет добавлено&lt;/B&gt;</translation>
    </message>
    <message>
        <source>Games console</source>
        <translation>Игровая консоль</translation>
    </message>
    <message>
        <source>PS3</source>
        <translation>PS3</translation>
    </message>
    <message>
        <source>XBox360</source>
        <translation>XBox360</translation>
    </message>
    <message>
        <source> These &quot;Home Cinema&quot; devices are connected to a television set. The format choice will thus be made according to the requirements of the set used. </source>
        <translation>Эти устройства (типа &quot;Домашний кинотеатр&quot;) подключаются к телевизору. Выбор формата будет зависеть от системных требований телевизора. </translation>
    </message>
    <message>
        <source>Warning: The old SD format is only suitable for old television sets using cathode ray tube technology. With these tubes, points were not circular but oval: we call this anamorphism. </source>
        <translation>Внимание: старый SD формат подходит только для старых телевизоров, использующих электронно-лучевую технологию. Точки в этих трубках не круглые, а овальные: это называется анаморфизм.</translation>
    </message>
    <message>
        <source>Playing a video in SD format on a modern LCD, LED or plasma television set gives openly disastrous results: The image is particularly ugly! Thus, if your television is new and if your device allows it, always use a HD or Full-HD format in preference to a SD format. </source>
        <translation>Воспроизведение видео в SD формате  на современных LCD, LED или плазменных телевизорах дает просто катастрофические результаты: изображение очень отвратительное! Поэтому если у вас новый телевизор и если это позволяет ваше устройство, всегда используйте HD или Full-HD формат.</translation>
    </message>
</context>
<context>
    <name>0035</name>
    <message>
        <source>For the WEB</source>
        <translation>Интернет</translation>
    </message>
    <message>
        <source>Device type</source>
        <translation>Тип устройства</translation>
    </message>
    <message>
        <source>Manufacturer/Model</source>
        <translation>Производитель/Модель</translation>
    </message>
    <message>
        <source>Remark</source>
        <translation>Примечание</translation>
    </message>
    <message>
        <source>Flash player (SWF)</source>
        <translation>Flash player (SWF)</translation>
    </message>
    <message>
        <source>All SWF players</source>
        <translation>Все SWF плееры</translation>
    </message>
    <message>
        <source>To be used with the HTML tag object class=&quot;player&quot; type=&quot;application/x-shockwave-flash&quot;</source>
        <translation>Используется в HTML теге: object class=&quot;player&quot; type=&quot;application/x-shockwave-flash&quot;</translation>
    </message>
    <message>
        <source>- For 4/3 : 320x240, 640x480, 960x720, 1440x1080</source>
        <translation>- для 4/3 : 320x240, 640x480, 960x720, 1440x1080</translation>
    </message>
    <message>
        <source>- For 16/9 : 320x180, 640x360, 1280x720, 1920x1080</source>
        <translation>- для 16/9 : 320x180, 640x360, 1280x720, 1920x1080</translation>
    </message>
    <message>
        <source>- For 40/17 : 320x136, 640x272, 1280x544, 1920x816</source>
        <translation>- для 40/17 : 320x136, 640x272, 1280x544, 1920x816</translation>
    </message>
    <message>
        <source>Movie format is: Container: SWF(2008) - Video Codec: h264 - Audio Codec: AAC-LC</source>
        <translation>Формат видео: Контейнер: SWF(2008) - Видео кодек: h264 - Аудио кодек: AAC-LC</translation>
    </message>
    <message>
        <source>Sharing and social networking</source>
        <translation>Сайты видео-обмена и социальные сети</translation>
    </message>
    <message>
        <source>Youtube</source>
        <translation>Youtube</translation>
    </message>
    <message>
        <source>720p - Movie format is: Container: MP4 - Video Codec: xVid - Audio Codec: MP3</source>
        <translation>720p - Формат видео: Контейнер: MP4 - Видео кодек: xVid - Аудио кодек: MP3</translation>
    </message>
    <message>
        <source>Daily Motion</source>
        <translation>Daily Motion</translation>
    </message>
    <message>
        <source>720p - Movie format is: Container: MP4 - Video Codec: h264 - Audio Codec: AAC-LC</source>
        <translation>720p - Формат видео: Контейнер: MP4 - Видео кодек: h264 - Аудио кодек: AAC-LC</translation>
    </message>
    <message>
        <source>Facebook</source>
        <translation>Facebook</translation>
    </message>
    <message>
        <source>Publish the video on YouTube or Daily Motion and integrate a link towards this video into Facebook</source>
        <translation>Публикация видео на YouTube или Daily Motion и вставка ссылки на это видео в Facebook</translation>
    </message>
    <message>
        <source>HTML 5</source>
        <translation>HTML 5</translation>
    </message>
    <message>
        <source>webm</source>
        <translation>webm</translation>
    </message>
    <message>
        <source>To be added to allow the new video TAG in HTML5 browsers. </source>
        <translation>Добавляется через новые теги видео в браузерах, поддерживающих HTML 5. </translation>
    </message>
    <message>
        <source>WebM is an open source format usable with Firefox, Google Chrome and Opera </source>
        <translation>WebM - это формат с открытым исходным кодом, поддерживаемый Firefox, Google Chrome и Opera </translation>
    </message>
    <message>
        <source>H264 is a format usable in Safari, Internet Explorer and Google Chrome </source>
        <translation>H264 формат поддерживается Safari, Internet Explorer и Google Chrome </translation>
    </message>
    <message>
        <source>To maintain backward compatibility with older browsers, it is advisable to offer a flash version within the tag. See: </source>
        <translation>Для обеспечения совместимости со старыми браузерами мы рекомендуем флэш версию с вставкой посредством тега. Смотрите: </translation>
    </message>
    <message>
        <source>developer.mozilla.org</source>
        <translation>developer.mozilla.org</translation>
    </message>
    <message>
        <source>mp4</source>
        <translation>mp4</translation>
    </message>
    <message>
        <source>ogv</source>
        <translation>ogv</translation>
    </message>
</context>
<context>
    <name>0036</name>
    <message>
        <source>Video codec</source>
        <translation>Видео кодек</translation>
    </message>
    <message>
        <source>The following table lists the video codecs which ffDiaporama can use to generate videos:</source>
        <translation>В следующей таблице перечислены видео кодеки, которые ffDiaporama может использовать при создании видео:</translation>
    </message>
    <message>
        <source>Codec</source>
        <translation>Кодек</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Название</translation>
    </message>
    <message>
        <source>WIKIPEDIA/Remark</source>
        <translation>Википедия / Примечание</translation>
    </message>
    <message>
        <source>MPJEP</source>
        <translation>MPJEP</translation>
    </message>
    <message>
        <source>Motion JPEG</source>
        <translation>Motion JPEG</translation>
    </message>
    <message>
        <source>http://en.wikipedia.org/wiki/Motion_JPEG</source>
        <translation>http://en.wikipedia.org/wiki/Motion_JPEG</translation>
    </message>
    <message>
        <source>MPEG2</source>
        <translation>MPEG2</translation>
    </message>
    <message>
        <source>MPEG-2 video</source>
        <translation>MPEG-2 video</translation>
    </message>
    <message>
        <source>http://en.wikipedia.org/wiki/MPEG-2</source>
        <translation>http://en.wikipedia.org/wiki/MPEG-2</translation>
    </message>
    <message>
        <source>MPEG4</source>
        <translation>MPEG4</translation>
    </message>
    <message>
        <source>DivX/XVid/MPEG-4</source>
        <translation>DivX/XVid/MPEG-4</translation>
    </message>
    <message>
        <source>http://en.wikipedia.org/wiki/Xvid</source>
        <translation>http://en.wikipedia.org/wiki/Xvid</translation>
    </message>
    <message>
        <source>H264HQ</source>
        <translation>H264HQ</translation>
    </message>
    <message>
        <source>High Quality H.264 AVC/MPEG-4 AVC</source>
        <translation>High Quality H.264 AVC/MPEG-4 AVC</translation>
    </message>
    <message>
        <source>http://en.wikipedia.org/wiki/H.264/MPEG-4_AVC</source>
        <translation>http://en.wikipedia.org/wiki/H.264/MPEG-4_AVC</translation>
    </message>
    <message>
        <source>H264PQ</source>
        <translation>H264PQ</translation>
    </message>
    <message>
        <source>Phone Quality H.264 AVC/MPEG-4 AVC</source>
        <translation>Phone Quality H.264 AVC/MPEG-4 AVC</translation>
    </message>
    <message>
        <source>X264LL</source>
        <translation>X264LL</translation>
    </message>
    <message>
        <source>x264 Lossless</source>
        <translation>x264 Lossless</translation>
    </message>
    <message>
        <source>http://en.wikipedia.org/wiki/X264</source>
        <translation>http://en.wikipedia.org/wiki/X264</translation>
    </message>
    <message>
        <source>VP8</source>
        <translation>VP8</translation>
    </message>
    <message>
        <source>WebP (WebM-VP8)</source>
        <translation>WebP (WebM-VP8)</translation>
    </message>
    <message>
        <source>http://en.wikipedia.org/wiki/WebM</source>
        <translation>http://en.wikipedia.org/wiki/WebM</translation>
    </message>
    <message>
        <source>Sorenson H.263</source>
        <translation>Sorenson H.263</translation>
    </message>
    <message>
        <source>http://en.wikipedia.org/wiki/H.263</source>
        <translation>http://en.wikipedia.org/wiki/H.263</translation>
    </message>
    <message>
        <source>THEORA</source>
        <translation>THEORA</translation>
    </message>
    <message>
        <source>Theora VP3</source>
        <translation>Theora VP3</translation>
    </message>
    <message>
        <source>http://en.wikipedia.org/wiki/Theora</source>
        <translation>http://en.wikipedia.org/wiki/Theora</translation>
    </message>
    <message>
        <source>ffDiaporama uses specific settings for encoding with x264. This settings are including: </source>
        <translation>ffDiaporama использует особые настройки кодирования в x264. Эти настроки включают:</translation>
    </message>
    <message>
        <source>- &lt;B&gt;High Quality&lt;/B&gt; for &quot;Home Cinema&quot; devices based on x264 &lt;U&gt;main&lt;/U&gt; profile, with 3 refs and 3 bframes. </source>
        <translation>-&lt;B&gt;Высокое качество&lt;/B&gt; для устройств типа «Домашний кинотеатр» на основе &lt;U&gt;основного&lt;/U&gt; профиля x264  с 3 refs и 3 bframes.</translation>
    </message>
    <message>
        <source>- &lt;B&gt;Phone Quality&lt;/B&gt; for mobile devices based on x264 &lt;U&gt;baseline&lt;/U&gt; profile, with 3 refs and 0 bframes. </source>
        <translation>-&lt;B&gt;Качество телефона&lt;/B&gt; для мобильных устройств на основе &lt;U&gt;базового&lt;/U&gt; профиля x264 с 3 refs и 0 bframes.</translation>
    </message>
    <message>
        <source>ffDiaporama uses the standard x264 &lt;U&gt;fast&lt;/U&gt; preset with 3 refs and qp set to 0.</source>
        <translation>ffDiaporama использует стандартную предустановку x264 &lt;U&gt;fast&lt;/U&gt; с 3 refs и qp равным 0.</translation>
    </message>
    <message>
        <source>Both settings are using &lt;U&gt;veryfast&lt;/U&gt; preset. </source>
        <translation>Обе настройки используют предустановку &lt;U&gt;veryfast&lt;/U&gt;. </translation>
    </message>
    <message>
        <source>Note: Variable bitrate is used with these two codecs. For more information on variable bitrate, see: &lt;a href=&quot;0115.html&quot;&gt;Render video&lt;/a&gt;</source>
        <translation>Примечание: переменный битрейт используется с этими двумя кодеками. Для получения дополнительной информации о переменном битрейте смотрите &lt;a href=&quot;0115.html&quot;&gt;Создание видео&lt;/a&gt;</translation>
    </message>
</context>
<context>
    <name>0037</name>
    <message>
        <source>Audio codec</source>
        <translation>Аудио кодек</translation>
    </message>
    <message>
        <source>The following table lists the audio codecs which ffDiaporama can use to generate videos:</source>
        <translation>В следующей таблице перечислены аудио кодеки, которые ffDiaporama может использовать при создании видео:</translation>
    </message>
    <message>
        <source>Codec</source>
        <translation>Кодек</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Название</translation>
    </message>
    <message>
        <source>WIKIPEDIA</source>
        <translation>Википедия</translation>
    </message>
    <message>
        <source>PCM</source>
        <translation>PCM</translation>
    </message>
    <message>
        <source>WAV / PCM signed 16-bit little-endian</source>
        <translation>WAV / PCM signed 16-bit little-endian</translation>
    </message>
    <message>
        <source>http://en.wikipedia.org/wiki/Pulse-code_modulation</source>
        <translation>http://en.wikipedia.org/wiki/Pulse-code_modulation</translation>
    </message>
    <message>
        <source>MP3</source>
        <translation>MP3</translation>
    </message>
    <message>
        <source>MPEG-1/2 Audio Layer III</source>
        <translation>MPEG-1/2 Audio Layer III</translation>
    </message>
    <message>
        <source>http://en.wikipedia.org/wiki/MP3</source>
        <translation>http://en.wikipedia.org/wiki/MP3</translation>
    </message>
    <message>
        <source>AAC-LC</source>
        <translation>AAC-LC</translation>
    </message>
    <message>
        <source>Advanced Audio Codec</source>
        <translation>Advanced Audio Codec</translation>
    </message>
    <message>
        <source>http://en.wikipedia.org/wiki/Advanced_Audio_Coding</source>
        <translation>http://en.wikipedia.org/wiki/Advanced_Audio_Coding</translation>
    </message>
    <message>
        <source>AC3</source>
        <translation>AC3</translation>
    </message>
    <message>
        <source>Dolby Digital</source>
        <translation>Dolby Digital</translation>
    </message>
    <message>
        <source>http://en.wikipedia.org/wiki/Dolby_Digital</source>
        <translation>http://en.wikipedia.org/wiki/Dolby_Digital</translation>
    </message>
    <message>
        <source>VORBIS</source>
        <translation>VORBIS</translation>
    </message>
    <message>
        <source>Vorbis</source>
        <translation>Vorbis</translation>
    </message>
    <message>
        <source>http://en.wikipedia.org/wiki/Vorbis</source>
        <translation>http://en.wikipedia.org/wiki/Vorbis</translation>
    </message>
    <message>
        <source>MP2</source>
        <translation>MP2</translation>
    </message>
    <message>
        <source>MPEG-1 Layer II</source>
        <translation>MPEG-1 Layer II</translation>
    </message>
    <message>
        <source>http://en.wikipedia.org/wiki/MPEG-2</source>
        <translation>http://en.wikipedia.org/wiki/MPEG-2</translation>
    </message>
    <message>
        <source>AMR</source>
        <translation>AMR</translation>
    </message>
    <message>
        <source>Adaptive Multi-Rate</source>
        <translation>Adaptive Multi-Rate</translation>
    </message>
    <message>
        <source>http://en.wikipedia.org/wiki/Adaptive_Multi-Rate_audio_codec</source>
        <translation>http://en.wikipedia.org/wiki/Adaptive_Multi-Rate_audio_codec</translation>
    </message>
    <message>
        <source>FLAC</source>
        <translation>FLAC</translation>
    </message>
    <message>
        <source>Free Lossless Audio Codec</source>
        <translation>Free Lossless Audio Codec</translation>
    </message>
    <message>
        <source>http://en.wikipedia.org/wiki/Flac</source>
        <translation>http://en.wikipedia.org/wiki/Flac</translation>
    </message>
</context>
<context>
    <name>0038</name>
    <message>
        <source>Container</source>
        <translation>Контейнеры</translation>
    </message>
    <message>
        <source>The following table lists the containers which ffDiaporama can use to generate videos, as well as the available audio and video codecs for every container:</source>
        <translation>В следующей таблице перечислены контейнеры, которые ffDiaporama может использовать при создании видео, а также аудио и видео кодеки для каждого контейнера:</translation>
    </message>
    <message>
        <source>Extension</source>
        <translation>Расширение</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Название</translation>
    </message>
    <message>
        <source>Video Codecs</source>
        <translation>Видео кодеки</translation>
    </message>
    <message>
        <source>Audio Codecs</source>
        <translation>Аудио кодеки</translation>
    </message>
    <message>
        <source>WIKIPEDIA</source>
        <translation>Википедия</translation>
    </message>
    <message>
        <source>3GP</source>
        <translation>3GP</translation>
    </message>
    <message>
        <source>MPEG4, H264HQ/H264PQ</source>
        <translation>MPEG4, H264HQ/H264PQ</translation>
    </message>
    <message>
        <source>AMR</source>
        <translation>AMR</translation>
    </message>
    <message>
        <source>http://en.wikipedia.org/wiki/3GP_and_3G2</source>
        <translation>http://en.wikipedia.org/wiki/3GP_and_3G2</translation>
    </message>
    <message>
        <source>AVI</source>
        <translation>AVI</translation>
    </message>
    <message>
        <source>Audio Video Interleave</source>
        <translation>Audio Video Interleave</translation>
    </message>
    <message>
        <source>MJPEG, MPEG2, MPEG4, H264HQ/H264PQ</source>
        <translation>MJPEG, MPEG2, MPEG4, H264HQ/H264PQ</translation>
    </message>
    <message>
        <source>PCM, MP2, MP3, AAC, AC3</source>
        <translation>PCM, MP2, MP3, AAC, AC3</translation>
    </message>
    <message>
        <source>http://en.wikipedia.org/wiki/Audio_Video_Interleave</source>
        <translation>http://en.wikipedia.org/wiki/Audio_Video_Interleave</translation>
    </message>
    <message>
        <source>MKV</source>
        <translation>MKV</translation>
    </message>
    <message>
        <source>Matroska file format</source>
        <translation>Matroska file format</translation>
    </message>
    <message>
        <source>MPEG4, H264HQ/H264PQ, THEORA</source>
        <translation>MPEG4, H264HQ/H264PQ, THEORA</translation>
    </message>
    <message>
        <source>PCM, MP3, AAC, AC3, VORBIS</source>
        <translation>PCM, MP3, AAC, AC3, VORBIS</translation>
    </message>
    <message>
        <source>http://en.wikipedia.org/wiki/Matroska</source>
        <translation>http://en.wikipedia.org/wiki/Matroska</translation>
    </message>
    <message>
        <source>MJPEG</source>
        <translation>MJPEG</translation>
    </message>
    <message>
        <source>Motion JPEG</source>
        <translation>Motion JPEG</translation>
    </message>
    <message>
        <source>PCM</source>
        <translation>PCM</translation>
    </message>
    <message>
        <source>http://en.wikipedia.org/wiki/Motion_JPEG</source>
        <translation>http://en.wikipedia.org/wiki/Motion_JPEG</translation>
    </message>
    <message>
        <source>MP4</source>
        <translation>MP4</translation>
    </message>
    <message>
        <source>MPEG-4 Part 14</source>
        <translation>MPEG-4 Part 14</translation>
    </message>
    <message>
        <source>MP3, AAC</source>
        <translation>MP3, AAC</translation>
    </message>
    <message>
        <source>http://en.wikipedia.org/wiki/MPEG-4_Part_14</source>
        <translation>http://en.wikipedia.org/wiki/MPEG-4_Part_14</translation>
    </message>
    <message>
        <source>MPEG</source>
        <translation>MPEG</translation>
    </message>
    <message>
        <source>MPEG program stream</source>
        <translation>MPEG program stream</translation>
    </message>
    <message>
        <source>MPEG2</source>
        <translation>MPEG2</translation>
    </message>
    <message>
        <source>MP2</source>
        <translation>MP2</translation>
    </message>
    <message>
        <source>http://en.wikipedia.org/wiki/MPEG_program_stream</source>
        <translation>http://en.wikipedia.org/wiki/MPEG_program_stream</translation>
    </message>
    <message>
        <source>WEBM</source>
        <translation>WEBM</translation>
    </message>
    <message>
        <source>WebM</source>
        <translation>WebM</translation>
    </message>
    <message>
        <source>VP8</source>
        <translation>VP8</translation>
    </message>
    <message>
        <source>VORBIS</source>
        <translation>VORBIS</translation>
    </message>
    <message>
        <source>http://en.wikipedia.org/wiki/WebM</source>
        <translation>http://en.wikipedia.org/wiki/WebM</translation>
    </message>
    <message>
        <source>FLV</source>
        <translation>FLV</translation>
    </message>
    <message>
        <source>Flash file format 2005</source>
        <translation>Flash file format 2005</translation>
    </message>
    <message>
        <source>MP3</source>
        <translation>MP3</translation>
    </message>
    <message>
        <source>http://en.wikipedia.org/wiki/Adobe_Flash</source>
        <translation>http://en.wikipedia.org/wiki/Adobe_Flash</translation>
    </message>
    <message>
        <source>Flash file format 2008</source>
        <translation>Flash file format 2008</translation>
    </message>
    <message>
        <source>H264HQ/H264PQ</source>
        <translation>H264HQ/H264PQ</translation>
    </message>
    <message>
        <source>AAC</source>
        <translation>AAC</translation>
    </message>
    <message>
        <source>OGV</source>
        <translation>OGV</translation>
    </message>
    <message>
        <source>Ogg</source>
        <translation>Ogg</translation>
    </message>
    <message>
        <source>THEORA</source>
        <translation>THEORA</translation>
    </message>
    <message>
        <source>http://en.wikipedia.org/wiki/Ogg</source>
        <translation>http://en.wikipedia.org/wiki/Ogg</translation>
    </message>
</context>
<context>
    <name>0039</name>
    <message>
        <source>Video standards and resolutions</source>
        <translation>Видео стандарты и разрешения</translation>
    </message>
    <message>
        <source> Standards and resolution are both fundamental properties which define a video. </source>
        <translation>Стандарты и разрешения - это два фундаментальных свойства, которые определяют видео.</translation>
    </message>
    <message>
        <source>Two associated properties are the geometry and the FPS number. </source>
        <translation>Геометрия и количество кадров в секунду (FPS) - это связанные с ними свойства видео.</translation>
    </message>
    <message>
        <source>Standard</source>
        <translation>Стандарт</translation>
    </message>
    <message>
        <source> Standards are a historic feature which continues today in spite of technological progress. </source>
        <translation>Стандарты являются историческим особенностями, которые продолжают использоваться и сегодня несмотря на технический прогресс.</translation>
    </message>
    <message>
        <source>A rich literature on this subject can be found on the internet. </source>
        <translation>Много литературы по этому вопросу можно найти в Интернете. </translation>
    </message>
    <message>
        <source>To simplify things we shall summarize as follows: </source>
        <translation>Для простоты мы обобщим это так: </translation>
    </message>
    <message>
        <source>PAL is effective in all the countries where the electricity network is 50 hz (which is the case, for example, for Western European countries)</source>
        <translation>PAL действует во всех странах, где сети электроснабжения — 50 Гц (например, страны Западной Европы)</translation>
    </message>
    <message>
        <source>NTSC is effective in all the countries where the electricity network is 60 hz (which is the case, for example, for the United States of America)</source>
        <translation>NTSC действует во всех странах, где сети электроснабжения — 60 Гц (например, США)</translation>
    </message>
    <message>
        <source>Geometry</source>
        <translation>Геометрия</translation>
    </message>
    <message>
        <source> The geometry is the ratio of Width to Height. </source>
        <translation> Геометрия - это отношение ширины к высоте. </translation>
    </message>
    <message>
        <source>4:3 corresponds to screens that are almost square</source>
        <translation>4:3 соответствует почти квадратному экрану</translation>
    </message>
    <message>
        <source>16:9 corresponds to screens that are rectangular</source>
        <translation>16:9 соответствует прямоугольному экрану</translation>
    </message>
    <message>
        <source>40:17 corresponds to cinema screens in overall size</source>
        <translation>40:17 соответствует экрану кинотеатра в полном размере</translation>
    </message>
    <message>
        <source>Resolution</source>
        <translation>Разрешение</translation>
    </message>
    <message>
        <source> Unlike with photos, video resolution is not expressed in megapixels but in number of points (pixels) shown by the screen multiplied by the number of lines. </source>
        <translation>В отличие от фотографий, разрешение видео выражается не в мегапикселях, а в количестве точек (пикселей), показываемых на экране, умноженных на количество строк. </translation>
    </message>
    <message>
        <source>So, 320x240 corresponds to 320 points of width and 240 lines in height </source>
        <translation>Так, разрешение 320x240 соответствует 320 точкам в ширину и 240 строкам в высоту </translation>
    </message>
    <message>
        <source>FPS (Frames per second)</source>
        <translation>FPS (количество кадров в секунду)</translation>
    </message>
    <message>
        <source> Corresponds to the number of images shown every second. You should know that in cinemas, 24 images are shown per second and this figure of 24 images is recognized as corresponding to the maximum number of images which the eye is capable of differentiating: </source>
        <translation> Соответствует количеству изображений, показываемых за одну секунду. Наверное, вы знаете, что в кинотеатрах показывается 24 кадра в секунду и признано, что человеческий глаз не способен воспринимать большее количество изображений в секунду: </translation>
    </message>
    <message>
        <source>More images per second and the eye does not notice it</source>
        <translation>больше изображений в секунду глаз просто не замечает</translation>
    </message>
    <message>
        <source>Fewer images per second and the film appears jerky</source>
        <translation>меньшее изображений и фильм воспринимается как отрывистый</translation>
    </message>
    <message>
        <source>Matrix of combinations managed by ffDiaporama</source>
        <translation>Матрица комбинаций, поддерживаемых ffDiaporama</translation>
    </message>
    <message>
        <source> The following table indicates all the combinations of geometry, standards and resolutions managed by ffDiaporama. For every combination, it indicates the number of associated FPS: </source>
        <translation>В следующей таблице перечислены все комбинации геометрии, стандартов и разрешений, которые ffDiaporama может использовать. Для каждой комбинации указано соответствующее FPS (количество кадров в секунду): </translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Название</translation>
    </message>
    <message>
        <source>PAL</source>
        <translation>PAL</translation>
    </message>
    <message>
        <source>NTSC</source>
        <translation>NTSC</translation>
    </message>
    <message>
        <source>Remark</source>
        <translation>Примечание</translation>
    </message>
    <message>
        <source>FPS</source>
        <translation>FPS</translation>
    </message>
    <message>
        <source>RIM 240</source>
        <translation>RIM 240</translation>
    </message>
    <message>
        <source>24 FPS</source>
        <translation>24 FPS</translation>
    </message>
    <message>
        <source>Special format used on Blackberry&apos;s very small screen</source>
        <translation>Специальный формат, используемый на очень маленьком экране Blackberry</translation>
    </message>
    <message>
        <source>QVGA</source>
        <translation>QVGA</translation>
    </message>
    <message>
        <source>25 FPS</source>
        <translation>25 FPS</translation>
    </message>
    <message>
        <source>29,97 FPS</source>
        <translation>29,97 FPS</translation>
    </message>
    <message>
        <source>Used mainly on the Internet and by first generation smartphones and mobile video players.</source>
        <translation>Используется в основном в Интернете, а также смартфонами и портативными видеопроигрывателями первого поколения.</translation>
    </message>
    <message>
        <source>HVGA</source>
        <translation>HVGA</translation>
    </message>
    <message>
        <source>Used mainly on the Internet and by second generation smartphones and mobile video players. &lt;B&gt;Because this format does not respect the traditional video geometry&lt;/B&gt;, &lt;B&gt;black bands appear to fill the screen to 480x320.&lt;/B&gt;</source>
        <translation>Используется в основном в Интернете, а также смартфонами и портативными видеопроигрывателями второго поколения. &lt;B&gt;Так как этот формат не соответствует традиционной геометрии видео&lt;/B&gt;, &lt;B&gt;то на экране 480 x 320 появляются черные полосы.&lt;/B&gt;</translation>
    </message>
    <message>
        <source>VGA</source>
        <translation>VGA</translation>
    </message>
    <message>
        <source>Used mainly on the Internet and by some smartphones.</source>
        <translation>Используется в основном в Интернете и некоторыми смартфонами.</translation>
    </message>
    <message>
        <source>SD-DVD</source>
        <translation>SD-DVD</translation>
    </message>
    <message>
        <source>The old television format for cathode ray tubes. Note that this format was specifically created for equipment with oval points: It is the anamorphism of the points that determines the geometry. That is why &lt;B&gt;it is absolutely necessary to avoid this format for anything other than television sets with cathode ray tubes.&lt;/B&gt;</source>
        <translation>Старый телевизионный  формат для электронно-лучевых трубок. Обратите внимание, что этот формат был создан специально для оборудования с овальными точками: это анаморфизм точек, который определяет геометрию. Поэтому &lt;B&gt;крайне важно не использовать этот формат ни для чего иного, кроме телевизоров с электронно-лучевыми трубками.&lt;/B&gt;</translation>
    </message>
    <message>
        <source>WVGA</source>
        <translation>WVGA</translation>
    </message>
    <message>
        <source>Used mainly on the Internet and by new generation smartphones and mobile video players. This format has become widespread and has replaced the old  QVGA, HVGA and VGA format used in the years 2000-2010. &lt;B&gt;Because this format does not respect the traditional video geometries, black bands appear to fill the screen to 800x480.&lt;/B&gt;</source>
        <translation>Используется в основном в Интернете, а также смартфонами и портативными видеопроигрывателями нового поколения. Этот формат получил широкое распространение и заменил старые QVGA, HVGA и VGA форматы, используемые в 2000-2010 годы. &lt;B&gt;Так как этот формат не соответствует традиционной геометрии видео, то на экране  800x480 появляются черные полосы.&lt;/B&gt;</translation>
    </message>
    <message>
        <source>XGA</source>
        <translation>XGA</translation>
    </message>
    <message>
        <source>Historically this format was used only by computers (fixed or portable). Now we meet it more and more on tablet computers like the iPad.</source>
        <translation>Исторически этот формат использовался только компьютерами (стационарными и ноутбуками). В настоящее время он все чаще встречается на планшетных компьютерах типа iPad.</translation>
    </message>
    <message>
        <source>23,976 FPS</source>
        <translation>23,976 FPS</translation>
    </message>
    <message>
        <source>Today, this format is widely used on the Internet, in particular by social networking and video-sharing sites. We also find it on certain &quot;home cinema&quot; devices.</source>
        <translation>Сегодня этот формат широко используется в Интернете, в частности, в социальных сетях и сайтах видео-обмена. Он также встречается на некоторых устройствах типа &quot;домашний кинотеатр&quot;.</translation>
    </message>
    <message>
        <source>This is the real &quot;home cinema&quot; format. It is used by the Blue Ray players and the &quot;home cinema&quot; devices.</source>
        <translation>Это настоящий формат &quot;домашнего кинотеатра&quot;. Он используется Blue Ray плеерами и устройства типа &quot;домашний кинотеатр&quot;.</translation>
    </message>
    <message>
        <source>Note that many other resolutions exists but which are not used by ffDiaporama.</source>
        <translation>Обратите внимание, что существует много других разрешений, которые не используются ffDiaporama.</translation>
    </message>
</context>
<context>
    <name>003A</name>
    <message>
        <source>File attachments (Thumbnails, nfo, etc...)</source>
        <translation>Присоединяемые файлы (обложка, nfo, и др.)</translation>
    </message>
    <message>
        <source>ffDiaporama allows you to produce joint files during the rendering process.</source>
        <translation>ffDiaporama может одновременно с видеофайлом создавать дополнительные файлы.</translation>
    </message>
    <message>
        <source>The following files are availables:</source>
        <translation>Доступны следующие файлы:</translation>
    </message>
    <message>
        <source>Thumbnails</source>
        <translation>Обложка</translation>
    </message>
    <message>
        <source>A video or music file can be accompanied with an image file which must have the same name but with the .jpg extension (example: holidays.mkv and holidays.jpg in the same folder). </source>
        <translation>Видео или аудио файлы могут сопровождаться изображением, которое должно иметь такое же имя, но с расширением .jpg (например: holidays.mkv и holidays.jpg в одной и той же папке).</translation>
    </message>
    <message>
        <source>This image is called a thumbnail and is used as icon for this file by ffDiaporama and many </source>
        <translation>Это изображение называется обложкой и используется в качестве миниатюры этого файла ffDiaporama и многими</translation>
    </message>
    <message>
        <source>Media Center Systems</source>
        <translation>мультимедиа системами</translation>
    </message>
    <message>
        <source>XBMC .nfo files</source>
        <translation>XBMC .nfo файлы</translation>
    </message>
    <message>
        <source>The .nfo file for XBMC allows XBMC to recognize the rendered videos as movies. </source>
        <translation>XBMC .nfo файл позволяет XBMC  распознавать созданное видео как фильм. </translation>
    </message>
    <message>
        <source>For more information see: &lt;a href=&quot;0044.html&quot;&gt;XBMC nfo files&lt;/a&gt;</source>
        <translation>Для получения дополнительной информации смотрите: &lt;a href=&quot;0044.html&quot;&gt;XBMC nfo файлы&lt;/a&gt;</translation>
    </message>
</context>
<context>
    <name>0040</name>
    <message>
        <source>Technical information on ffDiaporama</source>
        <translation>Техническая информация о ffDiaporama</translation>
    </message>
    <message>
        <source>ffDiaporama command line arguments</source>
        <translation>Параметры командной строки ffDiaporama</translation>
    </message>
    <message>
        <source>ffDiaporama project files</source>
        <translation>Файлы проектов ffDiaporama</translation>
    </message>
    <message>
        <source>The configuration files for ffDiaporama</source>
        <translation>Файлы конфигурации ffDiaporama</translation>
    </message>
    <message>
        <source>XBMC nfo files</source>
        <translation>XBMC nfo файлы</translation>
    </message>
    <message>
        <source> This section contains technical information about ffDiaporama. </source>
        <translation> Этот раздел содержит техническую информацию о ffDiaporama. </translation>
    </message>
    <message>
        <source>Index</source>
        <translation>Содержание</translation>
    </message>
    <message>
        <source>Types of objects in ffDiaporama</source>
        <translation>Типы объектов в ffDiaporama</translation>
    </message>
</context>
<context>
    <name>0041</name>
    <message>
        <source>ffDiaporama command line arguments</source>
        <translation>Параметры командной строки ffDiaporama</translation>
    </message>
    <message>
        <source>Syntax : ffDiaporama [-lang=] [-loglevel=] [Filename]</source>
        <translation>Синтаксис : ffDiaporama [-lang=] [-loglevel=] [Filename]</translation>
    </message>
    <message>
        <source>Setting</source>
        <translation>Параметр</translation>
    </message>
    <message>
        <source>Explanation</source>
        <translation>Объяснение</translation>
    </message>
    <message>
        <source>Filename</source>
        <translation>Filename</translation>
    </message>
    <message>
        <source>Filename of the project file to load at application startup</source>
        <translation>Имя файла проекта, который будет загружен при запуске программы</translation>
    </message>
    <message>
        <source>-lang=</source>
        <translation>-lang=</translation>
    </message>
    <message>
        <source>The language to be used. can take the following values: </source>
        <translation>Используемый язык интерфейса. Может принимать следующие значения: </translation>
    </message>
    <message>
        <source>&lt;B&gt;cz&lt;/B&gt; to use Czech</source>
        <translation>&lt;B&gt;cz&lt;/B&gt; использовать чешский</translation>
    </message>
    <message>
        <source>&lt;B&gt;de&lt;/B&gt; to use German</source>
        <translation>&lt;B&gt;de&lt;/B&gt; использовать немецкий</translation>
    </message>
    <message>
        <source>&lt;B&gt;en&lt;/B&gt; to use English</source>
        <translation>&lt;B&gt;en&lt;/B&gt; использовать английский</translation>
    </message>
    <message>
        <source>&lt;B&gt;es&lt;/B&gt; to use Spanish</source>
        <translation>&lt;B&gt;es&lt;/B&gt; использовать испанский</translation>
    </message>
    <message>
        <source>&lt;B&gt;el&lt;/B&gt; to use Greek</source>
        <translation>&lt;B&gt;el&lt;/B&gt; использовать греческий</translation>
    </message>
    <message>
        <source>&lt;B&gt;fr&lt;/B&gt; to use French</source>
        <translation>&lt;B&gt;fr&lt;/B&gt; использовать французский</translation>
    </message>
    <message>
        <source>&lt;B&gt;it&lt;/B&gt; to use Italian</source>
        <translation>&lt;B&gt;it&lt;/B&gt; использовать итальянский</translation>
    </message>
    <message>
        <source>&lt;B&gt;nl&lt;/B&gt; to use Dutch</source>
        <translation>&lt;B&gt;nl&lt;/B&gt; использовать голландский</translation>
    </message>
    <message>
        <source>&lt;B&gt;pt&lt;/B&gt; to use Portuguese</source>
        <translation>&lt;B&gt;pt&lt;/B&gt; использовать португальский</translation>
    </message>
    <message>
        <source>&lt;B&gt;ru&lt;/B&gt; to use Russian</source>
        <translation>&lt;B&gt;ru&lt;/B&gt; использовать русский</translation>
    </message>
    <message>
        <source>&lt;B&gt;zh-tw&lt;/B&gt; to use Taiwanese</source>
        <translation>&lt;B&gt;zh-tw&lt;/B&gt; использовать тайваньский</translation>
    </message>
    <message>
        <source>-loglevel=</source>
        <translation>-loglevel=</translation>
    </message>
    <message>
        <source>Adjust the level of messages shown in the console: </source>
        <translation>Регулирует тип сообщений, показываемых в командной строке: </translation>
    </message>
    <message>
        <source>1 to show all the messages of Debug, Information, Warning and Error levels</source>
        <translation>1 для отображения всех типов сообщений: Отладка, Информационные, Предупреждения и Ошибки</translation>
    </message>
    <message>
        <source>2 to show the messages of Information, Warning and Error levels</source>
        <translation>2 для отображения сообщений типа: Информационные, Предупреждения и Ошибки</translation>
    </message>
    <message>
        <source>3 to show the messages of Warning and Error levels</source>
        <translation>3 для отображения сообщений типа: Предупреждения и Ошибки</translation>
    </message>
    <message>
        <source>4 to show only the messages of Error levels</source>
        <translation>4 для отображения сообщений только типа Ошибки</translation>
    </message>
    <message>
        <source> Note: messages appear only if you launched the program from a console (CMD under Windows or Terminal under Linux). It is possible to redirect these messages into a log file by using &gt;. </source>
        <translation>Примечание: сообщения появляются только если вы запустили программу из консоли (cmd в Windows или terminal в Linux). Можно перенаправить эти сообщения в лог-файл с помощью &gt;. </translation>
    </message>
    <message>
        <source>&lt;B&gt;gl&lt;/B&gt; to use Galician</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>0042</name>
    <message>
        <source>ffDiaporama project files</source>
        <translation>Файлы проектов ffDiaporama</translation>
    </message>
    <message>
        <source>Project files for ffDiaporama are XML files with .ffd extension.</source>
        <translation>Файлы проектов ffDiaporama - это XML файлы с расширением .ffd.</translation>
    </message>
    <message>
        <source>This XML file does not contain copies of the multimedia elements (image, video, music) which are included in the project but only links to these files.</source>
        <translation>Этот XML-файл не содержит копии мультимедийных элементов (изображения, видео, музыка), которые включены в проект, там только ссылки на эти файлы.</translation>
    </message>
    <message>
        <source>The links are relative to the location of the .ffd file. This ensures that if the directory containing the project file (.ffd ) also contains the multimedia elements (directly or in subdirectories), it is possible to move and/or to rename the directory.</source>
        <translation>Ссылки формируются относительно расположения файла .ffd. Это гарантирует, что если каталог, содержащий файл проекта (.ffd), также содержит мультимедийные элементы (непосредственно или в подкаталогах), то его можно переместить или переименовать.</translation>
    </message>
    <message>
        <source>Another advantage is that a project created under Linux can be opened under Windows and conversely.</source>
        <translation>Еще одним преимуществом является то, что проект, созданный в Linux, может быть открыт в Windows и наоборот.</translation>
    </message>
</context>
<context>
    <name>0043</name>
    <message>
        <source>The configuration files for ffDiaporama</source>
        <translation>Файлы конфигурации ffDiaporama</translation>
    </message>
    <message>
        <source>The primary ffDiaporama.xml file is stored in the ffDiaporama directory. This file is global for all users: it contains the default ffDiaporama application settings. </source>
        <translation>Основной файл ffDiaporama.xml хранится в папке ffDiaporama. Этот файл является общим для всех пользователей: он содержит параметры ffDiaporama по умолчанию.</translation>
    </message>
    <message>
        <source>For Windows, this is C:\Program Files\ffDiaporama</source>
        <translation>Для Windows - это C:\Program Files\ffDiaporama</translation>
    </message>
    <message>
        <source>For Linux, it is /usr/share/ffDiaporama</source>
        <translation>Для Linux - это /usr/share/ffDiaporama</translation>
    </message>
    <message>
        <source>A secondary user-specific ffDiaporama.xml file is stored in the user&apos;s profile folder. </source>
        <translation>Вторичный (для каждого конкретного пользователя) файл ffDiaporama.xml хранится в папке профиля пользователя.</translation>
    </message>
    <message>
        <source>For Windows, this is C:\Document and settings\[user]</source>
        <translation>Для Windows - это C:\Document and settings\[user]</translation>
    </message>
    <message>
        <source>For Linux, it is ~/.ffDiaporama</source>
        <translation>Для Linux - это ~/.ffDiaporama</translation>
    </message>
    <message>
        <source>Remark: </source>
        <translation>Примечание: </translation>
    </message>
    <message>
        <source>File</source>
        <translation>Файл</translation>
    </message>
    <message>
        <source>Use</source>
        <translation>Назначение</translation>
    </message>
    <message>
        <source>ffDiaporama.xml</source>
        <translation>ffDiaporama.xml</translation>
    </message>
    <message>
        <source>Contains the application options for ffDiaporama</source>
        <translation>Содержит настройки ffDiaporama</translation>
    </message>
    <message>
        <source>Devices.xml</source>
        <translation>Devices.xml</translation>
    </message>
    <message>
        <source>Contains the base of profiles for video generation.</source>
        <translation>Содержит базу профилей устройств для создания видео.</translation>
    </message>
    <message>
        <source>For example:</source>
        <translation>Например:</translation>
    </message>
    <message>
        <source>In order to work, the application needs two configuration files and one database. The two configuration files consists of a pair of files.</source>
        <translation>Для работы приложения требуется два файла конфигурации и одна база данных. Файлы конфигурации представлены двумя файлами.</translation>
    </message>
    <message>
        <source> When the application is launched for the first time, the user configuration files and the database are created if they dont already exist. </source>
        <translation>При запуске приложения в первый раз создаются  пользовательские файлы конфигурации и база данных, если они еще не существуют. </translation>
    </message>
    <message>
        <source>If ffDiaporama is used by several users on the same PC, there will be separate configuration files and database for each user.</source>
        <translation>Если ffDiaporama используется несколькими пользователями на одном компьютере, то для каждого пользователя будут созданы отдельные конфигурационные файлы и базы данных.</translation>
    </message>
    <message>
        <source>ffDiaporama.db</source>
        <translation>ffDiaporama.db</translation>
    </message>
    <message>
        <source>Is a SQLite3 database containing cached objects and some configuration options.</source>
        <translation>SQLite3 база данных, содержащая кэшированные объекты и некоторые параметры конфигурации.</translation>
    </message>
</context>
<context>
    <name>0044</name>
    <message>
        <source>XBMC nfo files</source>
        <translation>XBMC nfo файлы</translation>
    </message>
    <message>
        <source>The .nfo file for XBMC allows XBMC to recognize the rendered videos as movies.</source>
        <translation>XBMC .nfo файл позволяет XBMC  распознавать созданное видео как фильм. </translation>
    </message>
    <message>
        <source>When doing a scan or an automatic new file discovery, XBMC uses the .nfo files.</source>
        <translation>При выполнении сканирования или автоматическом открытии файлов XBMC использует файлы .nfo.</translation>
    </message>
    <message>
        <source>During a manual refresh, XBMC offers you to find the film through one of its scrapers. Refuse its proposal to use the information contained in the .nfo file.</source>
        <translation>Во время ручного обновления XBMC предлагает найти фильм с помощью встроенных функций. Откажитесь от его предложения, чтобы использовать информацию, содержащуюся в .nfo файле.</translation>
    </message>
    <message>
        <source>Information included in the .nfo file</source>
        <translation>Информация, включаемая в .nfo файл</translation>
    </message>
    <message>
        <source> &lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; standalone=&quot;yes&quot; ?&gt;</source>
        <translation> &lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; standalone=&quot;yes&quot; ?&gt;</translation>
    </message>
    <message>
        <source> &lt;movie&gt; </source>
        <translation> &lt;movie&gt; </translation>
    </message>
    <message>
        <source> &lt;title&gt;&lt;U&gt;&lt;B&gt;Project Title&lt;/B&gt;&lt;/U&gt;&lt;/title&gt;</source>
        <translation> &lt;title&gt;&lt;U&gt;&lt;B&gt;Название проекта&lt;/B&gt;&lt;/U&gt;&lt;/title&gt;</translation>
    </message>
    <message>
        <source> &lt;sorttitle&gt;&lt;U&gt;&lt;B&gt;Rendered filename&lt;/B&gt;&lt;/U&gt;&lt;/sorttitle&gt;</source>
        <translation> &lt;sorttitle&gt;&lt;U&gt;&lt;B&gt;Имя создаваемого файла&lt;/B&gt;&lt;/U&gt;&lt;/sorttitle&gt;</translation>
    </message>
    <message>
        <source> &lt;set&gt;&lt;B&gt;&lt;U&gt;Project Album&lt;/U&gt;&lt;/B&gt;&lt;/set&gt;</source>
        <translation> &lt;set&gt;&lt;B&gt;&lt;U&gt;Альбом проекта&lt;/U&gt;&lt;/B&gt;&lt;/set&gt;</translation>
    </message>
    <message>
        <source> &lt;genre&gt;&lt;B&gt;&lt;U&gt;Project Album&lt;/U&gt;&lt;/B&gt;&lt;/genre&gt;</source>
        <translation> &lt;genre&gt;&lt;B&gt;&lt;U&gt;Альбом проекта&lt;/U&gt;&lt;/B&gt;&lt;/genre&gt;</translation>
    </message>
    <message>
        <source> &lt;year&gt;&lt;U&gt;&lt;B&gt;Year of project date&lt;/B&gt;&lt;/U&gt;&lt;/year&gt;</source>
        <translation> &lt;year&gt;&lt;U&gt;&lt;B&gt;Год проекта&lt;/B&gt;&lt;/U&gt;&lt;/year&gt;</translation>
    </message>
    <message>
        <source> &lt;outline&gt;&lt;U&gt;&lt;B&gt;Project Title&lt;/B&gt;&lt;/U&gt;&lt;/outline&gt;</source>
        <translation> &lt;outline&gt;&lt;U&gt;&lt;B&gt;Название проекта&lt;/B&gt;&lt;/U&gt;&lt;/outline&gt;</translation>
    </message>
    <message>
        <source> &lt;plot&gt;&lt;U&gt;&lt;B&gt;Project Comment&lt;/B&gt;&lt;/U&gt;&lt;/plot&gt;</source>
        <translation> &lt;plot&gt;&lt;U&gt;&lt;B&gt;Комментарий к проекту&lt;/B&gt;&lt;/U&gt;&lt;/plot&gt;</translation>
    </message>
    <message>
        <source> &lt;director&gt;&lt;U&gt;&lt;B&gt;Project Author&lt;/B&gt;&lt;/U&gt;&lt;/director&gt;</source>
        <translation> &lt;director&gt;&lt;U&gt;&lt;B&gt;Автор проекта&lt;/B&gt;&lt;/U&gt;&lt;/director&gt;</translation>
    </message>
    <message>
        <source> &lt;credits&gt;&lt;U&gt;&lt;B&gt;Project Author&lt;/B&gt;&lt;/U&gt;&lt;/credits&gt;</source>
        <translation> &lt;credits&gt;&lt;U&gt;&lt;B&gt;Автор проекта&lt;/B&gt;&lt;/U&gt;&lt;/credits&gt;</translation>
    </message>
    <message>
        <source> &lt;runtime&gt;&lt;U&gt;&lt;B&gt;Project duration in minutes&lt;/B&gt;&lt;/U&gt;&lt;/runtime&gt;</source>
        <translation> &lt;runtime&gt;&lt;U&gt;&lt;B&gt;Продолжительность проекта в минутах&lt;/B&gt;&lt;/U&gt;&lt;/runtime&gt;</translation>
    </message>
    <message>
        <source> &lt;thumb&gt;&lt;U&gt;&lt;B&gt;Project thumbnail&lt;/B&gt;&lt;/U&gt;&lt;/thumb&gt;</source>
        <translation> &lt;thumb&gt;&lt;U&gt;&lt;B&gt;Обложка проекта&lt;/B&gt;&lt;/U&gt;&lt;/thumb&gt;</translation>
    </message>
    <message>
        <source> &lt;/movie&gt; </source>
        <translation> &lt;/movie&gt; </translation>
    </message>
    <message>
        <source>See also</source>
        <translation>Смотрите также</translation>
    </message>
    <message>
        <source>Information on XBMC movies .nfo file</source>
        <translation>Информация о XBMC .nfo файле</translation>
    </message>
</context>
<context>
    <name>0045</name>
    <message>
        <source>Types of objects in ffDiaporama</source>
        <translation>Типы объектов в ffDiaporama</translation>
    </message>
    <message>
        <source> This section contains information about types of objects that can be used with ffDiaporama. </source>
        <translation>Этот раздел содержит информацию о типах объектов, которые поддерживаются ffDiaporama. </translation>
    </message>
    <message>
        <source>Index</source>
        <translation>Содержание</translation>
    </message>
    <message>
        <source>Text</source>
        <translation>Текст</translation>
    </message>
    <message>
        <source>Music file</source>
        <translation>Мызыкальные файлы</translation>
    </message>
    <message>
        <source>Bitmap image file</source>
        <translation>Растровые изображения</translation>
    </message>
    <message>
        <source>Bitmap image from clipboard</source>
        <translation>Растровые изображения в буфере обмена</translation>
    </message>
    <message>
        <source>Vector image file</source>
        <translation>Векторные изображения</translation>
    </message>
    <message>
        <source>Video file</source>
        <translation>Видео файлы</translation>
    </message>
    <message>
        <source>Google maps map</source>
        <translation>Карты Google maps</translation>
    </message>
    <message>
        <source>There are several things to know about Google Maps</source>
        <translation>Есть несколько вещей, которые необходимо знать о Google Maps</translation>
    </message>
    <message>
        <source>Google Maps generates images with up to 640x640. Within these images, Google Maps inserts logos that must be removed so that useful images are really only 640x600. Therefore, to generate an image for example 1080p, we have to assemble 6 Google Maps images.</source>
        <translation>Google Maps генерируют изображения размером 640x640. В этот размер Google Maps вставляет логотипы, которые должны быть удалены, так что полезный размер изображения составляет лишь 640x600. Таким образом, для создания изображения, например 1080p, мы должны собрать 6 изображений Google Maps.</translation>
    </message>
    <message>
        <source>Google Maps limit the number of queries a user can send. This limitation is made to prevent robots to saturate the servers. Unfortunately, this limitation may cause problems when generating big picture. It is possible that you may receive an error warning message saying that you have reached the limit of Google Maps request grants to you.</source>
        <translation>Google Maps ограничивает количество запросов, которые может отправить пользователь. Это ограничение введено для предотвращения работы роботов, пополняющих сервера. К сожалению, это ограничение может вызвать проблемы при создании большой карты. Вы можете получить сообщение об ошибке, предупреждающее о том, что вы достигли предела запросов к Google Maps.</translation>
    </message>
    <message>
        <source>To resolve this problem, ffDiaporama integrates a mechanical of recovery. Thus, if a card can not be generated immediately, you can resume it generation later.</source>
        <translation>Для решения этой проблемы в ffDiaporama интегрировано механическое восстановление. Это означает, что в случае невозможности немедленного создания карты, вы сможете продолжить ее создание позднее.</translation>
    </message>
    <message>
        <source>The roads are perpetually modified and Google Maps is constantly updated. Of course, it is not possible to generate a map for road conditions at a specific date. Therefore, think before you update a map of an old project.</source>
        <translation>Дороги постоянно меняются и Google Maps постоянно обновляется. Естественно, невозможно создать карту дорожных условий на конкретную дату. Поэтому подумайте, прежде чем обновить карту старого проекта.</translation>
    </message>
    <message>
        <source>Image size and Map size</source>
        <translation>Размер изображения и размер карты</translation>
    </message>
    <message>
        <source>Depending on the zoom level, Google Maps decides himself of the information displayed on the map. Thus, it is not possible to generate several maps at different zoom levels and then to create a zoom animation because there is no chance that this animation be fluid. It&apos;s why ffDiaporama proposes to generate maps of several image sizes. So, to create a fluid zoom animation, you can use a large image.</source>
        <translation>В зависимости от уровня масштабирования, Google Maps сам решает какую информацию отображать на карте. Вследствие этого невозможно создать несколько карт с разным уровнем масштабирования, а затем создать анимацию масштабирования, потому что такая анимация не будет плавной.Поэтому ffDiaporama позволяет создавать карты нескольких размеров. Для создания плавной анимации масштабирования вы можете использовать большое изображение.</translation>
    </message>
    <message>
        <source>The following table shows the different &lt;U&gt;Image sizes&lt;/U&gt; that you can generate.</source>
        <translation>В следующей таблице перечислены &lt;U&gt;Размеры изображений&lt;/U&gt;, которые вы можете создать.</translation>
    </message>
    <message>
        <source>Image size</source>
        <translation>Размер изображения</translation>
    </message>
    <message>
        <source>Resolution</source>
        <translation>Разрешение</translation>
    </message>
    <message>
        <source>Comment</source>
        <translation>Комментарий</translation>
    </message>
    <message>
        <source>Small-16:9</source>
        <translation>Маленькая-16:9</translation>
    </message>
    <message>
        <source>640x360 (0.2 MPix)</source>
        <translation>640x360 (0.2 Мп)</translation>
    </message>
    <message>
        <source>Quarter of 720p. Useful to add a small map in a photo collage</source>
        <translation>Четверть 720p. Пригодится для добавления маленькой карты в фотоколлаж</translation>
    </message>
    <message>
        <source>1280x720 (0.9 MPix)</source>
        <translation>1280x720 (0.9 Мп)</translation>
    </message>
    <message>
        <source>Useful for creating a full-screen map in a 720p project or to add a map to a title slide in a 1080p project</source>
        <translation>Пригодится для создания полноэкранной карты в проекте 720p или для добавления карты к титульному слайду в проекте 1080p</translation>
    </message>
    <message>
        <source>720px4-16:9</source>
        <translation>720px4-16:9</translation>
    </message>
    <message>
        <source>2560x1440 (3.6 MPix)</source>
        <translation>2560x1440 (3.6 Мп)</translation>
    </message>
    <message>
        <source>Useful for creating a full-screen &lt;B&gt;animated&lt;/B&gt; map in a 720p project or to add an &lt;B&gt;animated&lt;/B&gt; map to a title slide in a 1080p project</source>
        <translation>Пригодится для создания полноэкранной &lt;B&gt; анимированной &lt;/B&gt; карты в проекте 720p или для добавления &lt;B&gt;анимированной&lt;/B&gt; карты к титульному слайду в проекте 1080p</translation>
    </message>
    <message>
        <source>1920x1080 (2 MPix)</source>
        <translation>1920x1080 (2 Мп)</translation>
    </message>
    <message>
        <source>Useful for creating a full-screen map in a 1080p project</source>
        <translation>Пригодится для создания полноэкранной карты в проекте 1080p</translation>
    </message>
    <message>
        <source>1080px4-16:9</source>
        <translation>1080px4-16:9</translation>
    </message>
    <message>
        <source>3840x2160 (8.2 MPix)</source>
        <translation>3840x2160 (8.2 Мп)</translation>
    </message>
    <message>
        <source>Useful for creating a full-screen &lt;B&gt;animated&lt;/B&gt; map in a 1080p project</source>
        <translation>Пригодится для создания полноэкранной &lt;B&gt;анимированной&lt;/B&gt; карты в проекте 1080p</translation>
    </message>
    <message>
        <source>Note that all image sizes are 16:9 geometry to simplify computation.</source>
        <translation>Обратите внимание, что все размеры изображений показаны для геометрии 16:9 для упрощения вычислений.</translation>
    </message>
    <message>
        <source>Because a map is formed by joining multiple pieces of map, based on the image size, the card will be a map greater or lesser.</source>
        <translation>Поскольку карта формируется путем объединения нескольких частей, то в зависимости от размера изображения карта будет больше или меньше.</translation>
    </message>
    <message>
        <source>The following table shows the &lt;U&gt;Map sizes&lt;/U&gt; in kilometers for each &lt;U&gt;Image sizes&lt;/U&gt; and &lt;U&gt;Google Maps zoom levels&lt;/U&gt;.</source>
        <translation>В следующей таблице перечислены &lt;U&gt;Размеры карт&lt;/U&gt; в километрах и соответствующие им &lt;U&gt;Размеры изображения&lt;/U&gt; и &lt;U&gt;Уровни масштабирования Google Maps&lt;/U&gt;.</translation>
    </message>
    <message>
        <source>Zoom</source>
        <translation>Масштаб</translation>
    </message>
    <message>
        <source>Maps sizes (kilometers)</source>
        <translation>Размеры карт (километры)</translation>
    </message>
    <message>
        <source>720p x4</source>
        <translation>720p x4</translation>
    </message>
    <message>
        <source>15011.315 km x 8613.829 km</source>
        <translation>15011.315 км x 8613.829 км</translation>
    </message>
    <message>
        <source>12509.429 km x 5930.123 km</source>
        <translation>12509.429 км x 5930.123 км</translation>
    </message>
    <message>
        <source>6254.715 km x 3351.985 km</source>
        <translation>6254.715 км x 3351.985 км</translation>
    </message>
    <message>
        <source>18764.144 km x 7605.642 km</source>
        <translation>18764.144 км x 7605.642 км</translation>
    </message>
    <message>
        <source>3127.357 km x 1737.202 km</source>
        <translation>3127.357 км x 1737.202 км</translation>
    </message>
    <message>
        <source>9382.072 km x 4760.424 km</source>
        <translation>9382.072 км x 4760.424 км</translation>
    </message>
    <message>
        <source>1563.679 km x 876.788 km</source>
        <translation>1563.679 км x 876.788 км</translation>
    </message>
    <message>
        <source>4691.036 km x 2566.349 km</source>
        <translation>4691.036 км x 2566.349 км</translation>
    </message>
    <message>
        <source>781.839 km x 439.436 km</source>
        <translation>781.839 км x 439.436 км</translation>
    </message>
    <message>
        <source>2345.518 km x 1310.024 km</source>
        <translation>2345.518 км x 1310.024 км</translation>
    </message>
    <message>
        <source>390.920 km x 219.849 km</source>
        <translation>390.920 км x 219.849 км</translation>
    </message>
    <message>
        <source>1172.759 km x 658.501 km</source>
        <translation>1172.759 км x 658.501 км</translation>
    </message>
    <message>
        <source>195.460 km x 109.941 km</source>
        <translation>195.460 км x 109.941 км</translation>
    </message>
    <message>
        <source>586.379 km x 329.691 km</source>
        <translation>586.379 км x 329.691 км</translation>
    </message>
    <message>
        <source>97.730 km x 54.972 km</source>
        <translation>97.730 км x 54.972 км</translation>
    </message>
    <message>
        <source>293.190 km x 164.901 km</source>
        <translation>293.190 км x 164.901 км</translation>
    </message>
    <message>
        <source>48.865 km x 27.486 km</source>
        <translation>48.865 км x 27.486 км</translation>
    </message>
    <message>
        <source>146.595 km x 82.457 km</source>
        <translation>146.595 км x 82.457 км</translation>
    </message>
    <message>
        <source>24.432 km x 13.743 km</source>
        <translation>24.432 км x 13.743 км</translation>
    </message>
    <message>
        <source>73.297 km x 41.230 km</source>
        <translation>73.297 км x 41.230 км</translation>
    </message>
    <message>
        <source>12.216 km x 6.872 km</source>
        <translation>12.216 км x 6.872 км</translation>
    </message>
    <message>
        <source>36.649 km x 20.615 km</source>
        <translation>36.649 км x 20.615 км</translation>
    </message>
    <message>
        <source>6.108 km x 3.436 km</source>
        <translation>6.108 км x 3.436 км</translation>
    </message>
    <message>
        <source>18.324 km x 10.307 km</source>
        <translation>18.324 км x 10.307 км</translation>
    </message>
    <message>
        <source>3.054 km x 1.718 km</source>
        <translation>3.054 км x 1.718 км</translation>
    </message>
    <message>
        <source>9.162 km x 5.154 km</source>
        <translation>9.162 км x 5.154 км</translation>
    </message>
    <message>
        <source>1.527 km x 0.859 km</source>
        <translation>1.527 км x 0.859 км</translation>
    </message>
    <message>
        <source>4.581 km x 2.577 km</source>
        <translation>4.581 км x 2.577 км</translation>
    </message>
    <message>
        <source>0.764 km x 0.429 km</source>
        <translation>0.764 км x 0.429 км</translation>
    </message>
    <message>
        <source>2.291 km x 1.288 km</source>
        <translation>2.291 км x 1.288 км</translation>
    </message>
    <message>
        <source>1.145 km x 0.644 km</source>
        <translation>1.145 км x 0.644 км</translation>
    </message>
    <message>
        <source>Notes:</source>
        <translation>Примечания:</translation>
    </message>
    <message>
        <source>Because Google Maps don&apos;t respect perfect alignment when using high zoom level, all map sizes lesser than 400 meters are useless with ffDiaporama.</source>
        <translation>Поскольку Google Maps не обеспечивают хорошего выравнивания при использовании большого приближения, то все карты размером менее 400 метров бесполезны для ffDiaporama.</translation>
    </message>
    <message>
        <source>Google Maps zoom levels 0 and 1 are useless with ffDiaporama because they produce images that are too small.</source>
        <translation>Уровни масштабирования 0 и 1 в Google Maps бесполезны для ffDiaporama, потому что они создают изображения, которые слишком малы.</translation>
    </message>
    <message>
        <source>Google Maps zoom levels 20 and 11 are useless with ffDiaporama Google Maps don&apos;t respect perfect alignment when using high zoom level.</source>
        <translation>Уровни масштабирования 20 и 11 в Google Maps бесполезны для ffDiaporama, потому что Google Maps не обеспечивают хорошего выравнивания при использовании большого приближения.</translation>
    </message>
    <message>
        <source>Bitmap image file and Bitmap image from clipboard</source>
        <translation>Растровые изображения</translation>
    </message>
    <message>
        <source>Google Maps</source>
        <translation>Google Maps</translation>
    </message>
    <message>
        <source>ffDiaporama can use music file in the following formats: wav, aac, adts, ac3, mp2, mp3, m4a or m4b or m4p, 3g2 or 3ga or 3gp, ogg or oga, spx, wma, flac</source>
        <translation>ffDiaporama поддерживает работу с музыкальными файлами следующих форматов: wav, aac, adts, ac3, mp2, mp3, m4a или m4b или m4p, 3g2 или 3ga или 3gp, ogg или oga, spx, wma, flac</translation>
    </message>
    <message>
        <source>See also: </source>
        <translation>Смотрите также: </translation>
    </message>
    <message>
        <source>Definition of music file on Wikipedia</source>
        <translation>Понятие музыкального файла в Википедии</translation>
    </message>
    <message>
        <source>ffDiaporama can use bitmap images in the following formats: bmp, gif (but not animated gif), jpg or jpeg, png, pbm, pgm, ppm, tiff or tif, xbm, xpm</source>
        <translation>ffDiaporama поддерживает работу с растровыми изображениями следующих форматов: bmp, gif (но не анимированный gif), jpg или jpeg, png, pbm, pgm, ppm, tiff или tif, xbm, xpm</translation>
    </message>
    <message>
        <source>Definition of Bitmap image file on Wikipedia</source>
        <translation>Понятие растрового изображения в Википедии</translation>
    </message>
    <message>
        <source>ffDiaporama can use vector images in the following formats: svg</source>
        <translation>ffDiaporama поддерживает работу с векторными изображениями следующих форматов: svg</translation>
    </message>
    <message>
        <source>Definition of vector image file on Wikipedia</source>
        <translation>Понятие векторного изображения в Википедии</translation>
    </message>
    <message>
        <source>ffDiaporama can use video files in the following formats: avi, mov, mpg or mpeg, mkv, mp4 or m4v, flv, 3gp, ogv, webm, dv, wmv, mts or m2ts or mod</source>
        <translation>ffDiaporama поддерживает работу с видео файлами следующих форматов: avi, mov, mpg или mpeg, mkv, mp4 или m4v, flv, 3gp, ogv, webm, dv, wmv, mts или m2ts или mod</translation>
    </message>
    <message>
        <source>Note: mts, m2ts and mod files are stream formats (AVCHD) which involve some limitations. For more information on AVCHD, see: </source>
        <translation>Примечание:  mts, m2ts и mod файлы имеют формат потока (AVCHD), который включает некоторые ограничения. Более подробно о AVCHD смотрите: </translation>
    </message>
    <message>
        <source>Advanced Video Coding High Definition on Wikipedia</source>
        <translation>Advanced Video Coding High Definition в Википедии</translation>
    </message>
    <message>
        <source>Definition of video file on Wikipedia</source>
        <translation>Понятие видео файла в Википедии</translation>
    </message>
    <message>
        <source>Note: ffDiaporama uses the filename extension to determine the type of image. It is therefore necessary that this extension was valid.</source>
        <translation>Примечание: ffDiaporama использует расширение файла, чтобы определить тип изображения. Поэтому необходимо, чтобы это расширение было правильным.</translation>
    </message>
</context>
<context>
    <name>0101</name>
    <message>
        <source>Application options dialog</source>
        <translation>Диалоговое окно Настройки программы</translation>
    </message>
    <message>
        <source>The Application options tab allows to define the general behavior of ffDiaporama.</source>
        <translation>Вкладка Параметры программы позволяет определить общее поведение ffDiaporama.</translation>
    </message>
    <message>
        <source>The Project options tab allows to define the options by default of the current project and for the new projects.</source>
        <translation>Вкладка Параметры проекта позволяет определить настройки по умолчанию для текущего проекта и новых проектов.</translation>
    </message>
    <message>
        <source>The Rendering options Tab allows to define the options used by default during the generation of videos.</source>
        <translation>Вкладка Параметры создания файла позволяет определить настройки, используемые по умолчанию, при создании видео.</translation>
    </message>
    <message>
        <source>Application options</source>
        <translation>Параметры программы</translation>
    </message>
    <message>
        <source>Remember Windows size and positions</source>
        <translation>Запоминать размер и позицию окон</translation>
    </message>
    <message>
        <source>If this box is checked, the sizes and the positions of all windows and dialogs will be saved and reused the next time you use ffDiaporama.</source>
        <translation>Если этот флажок установлен, размеры и положение всех окон и диалогов будут запомнены и повторно использованы при следующем запуске ffDiaporama.</translation>
    </message>
    <message>
        <source>Remember last used folders</source>
        <translation>Запоминать последнюю используемую папку</translation>
    </message>
    <message>
        <source>If this box is checked, the directories for images, videos, projects, music and the generation of your movie will be saved and reused the next time you use ffDiaporama.</source>
        <translation>Если этот флажок установлен, папки с изображениями, видео, проектами, музыкой и созданным фильмом будут запомнены и повторно использованы при следующем запуске ffDiaporama.</translation>
    </message>
    <message>
        <source>Enable &quot;raster&quot; Graphics system</source>
        <translation>Включить &quot;растровую&quot; Графическую Систему</translation>
    </message>
    <message>
        <source>&lt;B&gt;For Linux users only: &lt;/B&gt;If this box is checked, the graphic system &quot;raster&quot; is used instead of the default graphic system. This option is used only at application start up. </source>
        <translation>&lt;B&gt;Только для пользователей Linux: &lt;/B&gt;если этот флажок установлен, будет использоваться растровая  графическая система вместо графической системы по умолчанию. Этот параметр вступит в силу только после перезапуска программы.</translation>
    </message>
    <message>
        <source>The &quot;raster&quot; Graphics accelerates the display but can raise problems on some computer in particular with KDE.</source>
        <translation>Растровая графика ускоряет отображение, но может вызвать проблемы на некоторых компьютерах, в частности с KDE.</translation>
    </message>
    <message>
        <source>Memory profil</source>
        <translation>Профиль памяти</translation>
    </message>
    <message>
        <source>Preview options</source>
        <translation>Настройка предварительного просмотра</translation>
    </message>
    <message>
        <source>Frame rate</source>
        <translation>Частота кадров</translation>
    </message>
    <message>
        <source>Defines the number of images per second which will be generated to show the preview. </source>
        <translation>Определяет количество кадров в секунду, которое будет использоваться при предварительном просмотре.</translation>
    </message>
    <message>
        <source>Note: the higher this number, the more smooth the preview will be. On the other hand, more computer resources will be required. Reduce this number on slow computers or if the gauge for your multimedia reader is frequently in the red zone.</source>
        <translation>Примечание: чем выше это число, тем более гладким будет просмотр. С другой стороны потребуется больше ресурсов компьютера. Уменьшите это значение на медленных компьютерах или если датчик вашего мультимедиапроигрывателя часто находится в красной зоне.</translation>
    </message>
    <message>
        <source>Image smoothing (smooth images during preview)</source>
        <translation>Сглаживание изображений (при предварительном просмотре)</translation>
    </message>
    <message>
        <source>If this box is checked, the image smoothing effect will be applied to the images during the preview. </source>
        <translation>Если этот флажок установлен, то эффект сглаживания изображений будет применен во время предварительного просмотра.</translation>
    </message>
    <message>
        <source>Editor options</source>
        <translation>Параметры редактора</translation>
    </message>
    <message>
        <source>Coordinates unit</source>
        <translation>Единицы измерения</translation>
    </message>
    <message>
        <source>This option allows to select the unit for the coordinates which will be used in the properties dialog. You can choose: </source>
        <translation>Эта опция позволяет выбрать единицы измерения  координат, которые будут использоваться в диалоговом окне свойств. Вы можете выбрать: </translation>
    </message>
    <message>
        <source>Percentage: Coordinates (X, Y, Width and Height) are expressed in percentages</source>
        <translation>проценты: координаты (X, Y, ширина и высота) будут выражены в процентах</translation>
    </message>
    <message>
        <source>Pixel: Coordinates (X, Y, Width and Height) are expressed in pixels relative to a screen in 1080p mode</source>
        <translation>пикселы: координаты (X, Y, ширина и высота) будут выражены в пикселях относительно экрана в режиме 1080p</translation>
    </message>
    <message>
        <source>Object position</source>
        <translation>Положение объекта</translation>
    </message>
    <message>
        <source>This option allows you to adjust the positions occupied by new objects inserted into the timeline. </source>
        <translation>Этот параметр позволяет определить позицию, занимаемую новыми объектами, вставляемыми на линию времени. </translation>
    </message>
    <message>
        <source>If &lt;I&gt;&lt;B&gt;Insert after the current selected object&lt;/B&gt;&lt;/I&gt; is selected, then the new slides will be created after the current slide.</source>
        <translation>Если выбран параметр &lt;I&gt;&lt;B&gt;Вставить после текущего объекта&lt;/B&gt;&lt;/I&gt;, то новые слайды будут создаваться после текущего слайда.</translation>
    </message>
    <message>
        <source>If &lt;I&gt;&lt;B&gt;Append to the end of the project&lt;/B&gt;&lt;/I&gt; is selected, then the new slides will be created at the end of the project.</source>
        <translation>Если выбран параметр &lt;I&gt;&lt;B&gt;Добавить в конец проекта&lt;/B&gt;&lt;/I&gt;, то новые слайды будут создаваться в конце проекта.</translation>
    </message>
    <message>
        <source>Object deletion</source>
        <translation>Удаление объекта</translation>
    </message>
    <message>
        <source>If this box is checked, a confirmation prompt will be displayed every time you remove an object: </source>
        <translation>Если этот флажок установлен, то запрос на подтверждение будет отображаться при каждом удалении объекта: </translation>
    </message>
    <message>
        <source>A slide from the main window</source>
        <translation>слайда из главного окна</translation>
    </message>
    <message>
        <source>A shot or bloc from the slide properties dialog box</source>
        <translation>кадра или блока из диалогового окна свойств слайда</translation>
    </message>
    <message>
        <source>If the &lt;B&gt;Activate deinterlace filter when add new MTS videos&lt;/B&gt; is checked, deinterlace filter will automatically be activated for all .mts videos added to the project. </source>
        <translation>Если установлен флажок &lt;B&gt;Устранение чересстрочности при добавлении нового MTS видео&lt;/B&gt;, то фильтр устранения чересстрочности будет автоматически активирован для всего .mts видео, добавленного в проект.</translation>
    </message>
    <message>
        <source>interlaced video</source>
        <translation>чересстрочность видео</translation>
    </message>
    <message>
        <source>Project options</source>
        <translation>Параметры проекта</translation>
    </message>
    <message>
        <source>Project properties</source>
        <translation>Свойства проекта</translation>
    </message>
    <message>
        <source>Title</source>
        <translation>Название</translation>
    </message>
    <message>
        <source>Defined the automatic filling method to use for the title&apos;s project properties: </source>
        <translation>Определяет метод автоматического заполнения названия проекта: </translation>
    </message>
    <message>
        <source>No automatic filling : You will have to define manually the title</source>
        <translation>Без автозаполнения: вы должны будете задать название вручную</translation>
    </message>
    <message>
        <source>Fill with project name when project save : The title will take the same name as the .ffd file</source>
        <translation>Использовать имя проекта при сохранении: название будет таким же, как имя ffd файла</translation>
    </message>
    <message>
        <source>Author</source>
        <translation>Автор</translation>
    </message>
    <message>
        <source>Default language</source>
        <translation>Язык по умолчанию</translation>
    </message>
    <message>
        <source>Defines the default value for the field Language</source>
        <translation>Определяет значение по умолчанию для поля Язык</translation>
    </message>
    <message>
        <source>New project geometry</source>
        <translation>Новая геометрия проекта</translation>
    </message>
    <message>
        <source>Selects the image geometry to be used for the creation of projects. Three geometries are available : </source>
        <translation>Выбор геометрии изображения, используемой при создании проектов. Доступно три геометрии:</translation>
    </message>
    <message>
        <source> Note: the geometry of a project is defined once and for all when it is created. It is not possible to modify it afterwards.</source>
        <translation>Примечание: геометрия проекта определяется при его создании один раз и навсегда. Ее невозможно изменить  впоследствии.</translation>
    </message>
    <message>
        <source>Default 1&lt;SUP&gt;st&lt;/SUP&gt; shot duration</source>
        <translation>Длительность 1&lt;SUP&gt;-го&lt;/SUP&gt; кадра по умолчанию</translation>
    </message>
    <message>
        <source>Defines the default duration of the first shot for slides during their creation.</source>
        <translation>Определяет длительность первого кадра  по умолчанию для слайдов во время их создания.</translation>
    </message>
    <message>
        <source>Next shot duration</source>
        <translation>Длительность следующего кадра</translation>
    </message>
    <message>
        <source>Defines the default duration of further shots.</source>
        <translation>Определяет длительность следующих кадров (по умолчанию).</translation>
    </message>
    <message>
        <source>Default transition</source>
        <translation>Переход по умолчанию</translation>
    </message>
    <message>
        <source>Defines the transition to be inserted between inserted slides : </source>
        <translation>Определяет основной тип перехода между слайдами: </translation>
    </message>
    <message>
        <source> A transition chosen randomly from the library</source>
        <translation>переход выбирается случайным образом</translation>
    </message>
    <message>
        <source> No transition</source>
        <translation>без перехода</translation>
    </message>
    <message>
        <source> Cross-fade transition</source>
        <translation>плавное затухание</translation>
    </message>
    <message>
        <source>Default options for speed waves</source>
        <translation>Параметры скорости по умолчанию</translation>
    </message>
    <message>
        <source>Transition</source>
        <translation>Переход</translation>
    </message>
    <message>
        <source>Sets the default speed wave for the transitions of new projects</source>
        <translation>Устанавливает скорость переходов новых проектов по умолчанию</translation>
    </message>
    <message>
        <source>Blocks animation</source>
        <translation>Анимация блока</translation>
    </message>
    <message>
        <source>Sets the default speed curve for the blocks animations of new projects</source>
        <translation>Устанавливает скорость анимации блоков новых проектов по умолчанию</translation>
    </message>
    <message>
        <source>Images animation</source>
        <translation>Анимация изображения</translation>
    </message>
    <message>
        <source>Sets the default speed for the image effects animations of new projects</source>
        <translation>Устанавливает скорость анимации изображений новых проектов по умолчанию</translation>
    </message>
    <message>
        <source>Default options for new text block</source>
        <translation>Параметры нового текстового блока по умолчанию</translation>
    </message>
    <message>
        <source>Text</source>
        <translation>Текст</translation>
    </message>
    <message>
        <source>Allows to select the characters style applied to the new text blocks. This style defines the font, its size, its color and the shadow effects applied to the text.</source>
        <translation>Позволяет выбрать стиль символов, применяемый к новым блокам текста. Этот стиль определяет шрифт, его размер, цвет и эффект тени, применяемый к тексту.</translation>
    </message>
    <message>
        <source>Background</source>
        <translation>Фон</translation>
    </message>
    <message>
        <source>Allows to select the style of background applied to the new text blocks. This style defines the transparency of the block and its filling.</source>
        <translation>Позволяет выбрать стиль фона, применяемый к новому текстовому блоку. Этот стиль определяет прозрачность блока и его заливку.</translation>
    </message>
    <message>
        <source>Shape</source>
        <translation>Форма</translation>
    </message>
    <message>
        <source>Coordinates</source>
        <translation>Координаты</translation>
    </message>
    <message>
        <source>Allows to select, for every project geometry, the style of the location applied to the new text blocks. This style defines the size, the coordinates, the rotations and the geometrical constraint.</source>
        <translation>Позволяет выбрать для каждой геометрии проекта стиль расположения, применяемый к новым текстовым блокам. Этот стиль определяет размер, координаты, вращение и ограничения геометрии.</translation>
    </message>
    <message>
        <source>Locking</source>
        <translation>Блокировка</translation>
    </message>
    <message>
        <source>Allows to Select the geometric constraint applied to the new text blocks. </source>
        <translation>Позволяет выбрать блокировку геометрии, применяемую к новым блокам текста. </translation>
    </message>
    <message>
        <source>Unlock: The shape of the block is free</source>
        <translation>Разблокировать: свободная форма блока</translation>
    </message>
    <message>
        <source>Lock to project geometry: The shape of the has the same shape as the image</source>
        <translation>Заблокировать геометрию проекта: форма блока имеет такую ​​же форму, что и изображение</translation>
    </message>
    <message>
        <source>Default options for new image or video block (when creating slide)</source>
        <translation>Параметры нового изображения или видео (по умолчанию - при создании слайда)</translation>
    </message>
    <message>
        <source>The following settings apply to all image formats:</source>
        <translation>Следующие настройки применяются ко всем форматам изображений:</translation>
    </message>
    <message>
        <source>Text style</source>
        <translation>Стиль текста</translation>
    </message>
    <message>
        <source>Allows to select the characters style applied to the text of the blocks. This style defines the font, its size, its color and the shadow effects applied to the text.</source>
        <translation>Позволяет выбрать стиль символов, применяемый к блокам текста. Этот стиль определяет шрифт, его размер, цвет и эффект тени, применяемый к тексту.</translation>
    </message>
    <message>
        <source>For every image format and every project geometry select the style of location to applied to the new blocks. This style concerns the size, the coordinates, the rotations and the geometrical constraint.</source>
        <translation>Для каждого формата изображения и каждой геометрии проекта выберите стиль расположения, применяемый к новым блокам. Этот стиль определяет размер, координаты, вращения и ограничения геометрии.</translation>
    </message>
    <message>
        <source>Framing styles define how to crop the image to make it compatible with the block in which is displayed.</source>
        <translation>Стиль кадрирования определяет  как обрезается изображение, для обеспечения его совместимости с блоком, в котором оно отображается.</translation>
    </message>
    <message>
        <source>The positioning styles define the the size, coordinates, rotations and geometric constraint to apply to blocks.</source>
        <translation>Стиль позиционирования определяет размер, координаты, вращение и ограничения геометрии, применяемые к блокам.</translation>
    </message>
    <message>
        <source>Default options for new image or video block (when adding block in slide dialog)</source>
        <translation>Параметры нового изображения или видео (по умолчанию - при добавлении блока)</translation>
    </message>
    <message>
        <source>The same selection that when creating slides apply.</source>
        <translation>Используются те же настройки, что и при создании слайдов.</translation>
    </message>
    <message>
        <source>Rendering options</source>
        <translation>Параметры создания файла</translation>
    </message>
    <message>
        <source>Default video name</source>
        <translation>Имя видео (по умолчанию)</translation>
    </message>
    <message>
        <source>This option allows to select the name which will be proposed by default during the rendering of videos. This option can be applied only if the project was saved at first.</source>
        <translation>Эта опция позволяет выбрать название, которое будет предложено по умолчанию во время создания видео. Она может быть применена только если проект был сохранен впервые.</translation>
    </message>
    <message>
        <source>Use project name as video name</source>
        <translation>Использовать имя файла проекта как название видео</translation>
    </message>
    <message>
        <source>If the project name is &quot;assembly.ffd&quot;, then &quot;assembly&quot; will be the proposed name</source>
        <translation>если имя файла проекта &quot;assembly.ffd&quot;, то название видео будет &quot;assembly&quot;</translation>
    </message>
    <message>
        <source>Use project folder&apos;s name as video name</source>
        <translation>Использовать имя папки проекта как название видео</translation>
    </message>
    <message>
        <source>If the project name is &quot;assembly.ffd&quot; and is saved in the &quot;My holidays 2011&quot; directory, then &quot;My holidays 2011&quot; will be the proposed name</source>
        <translation>если имя проекта &quot;assembly.ffd&quot; и он сохранен в папке &quot;Мои праздники 2011&quot;, то название видео будет &quot; Мои праздники 2011&quot;</translation>
    </message>
    <message>
        <source>Use title project as video name</source>
        <translation>Использовать имя проекта как название видео</translation>
    </message>
    <message>
        <source>Use the title defined in the project properties as the name of video</source>
        <translation>использование имени определено в свойствах проекта в качестве названия видео</translation>
    </message>
    <message>
        <source>Default device mode rendering options</source>
        <translation>Параметры создания видеофайла для различных устройств (по умолчанию)</translation>
    </message>
    <message>
        <source>Smartphone</source>
        <translation>Смартфон</translation>
    </message>
    <message>
        <source>Selects the default type and equipment model when you will click the &quot;Player and Smartphone&quot; button of the &quot;Render movie&quot; menu</source>
        <translation>Выберите вид оборудования, который будет предложен по умолчанию
при нажатии кнопки &quot;Плеер и смартфон&quot; в меню &quot;Создание видео&quot;</translation>
    </message>
    <message>
        <source>Multimedia system</source>
        <translation>Мультимедиа система</translation>
    </message>
    <message>
        <source>Selects the default type and equipment model when you will click the &quot;Multimedia system&quot; button of the &quot;Render movie&quot; menu</source>
        <translation>Выберите вид оборудования, который будет предложен по умолчанию
при нажатии кнопки &quot;Мультимедиа система&quot; в меню &quot;Создание видео&quot;</translation>
    </message>
    <message>
        <source>For the WEB</source>
        <translation>Интернет</translation>
    </message>
    <message>
        <source>Selects the default type and equipment model when you will click the &quot;For the Web&quot; button of the &quot;Render movie&quot; menu</source>
        <translation>Выберите вид оборудования, который будет предложен по умолчанию
при нажатии кнопки &quot;Интернет&quot; в меню &quot;Создание видео&quot;</translation>
    </message>
    <message>
        <source>Lossless</source>
        <translation>Сжатие без потерь</translation>
    </message>
    <message>
        <source>Selects the default image size to be used when you will click the &quot;Lossless&quot; button of the &quot;Render movie&quot; menu</source>
        <translation>Выберите формат изображения по умолчанию, который будет использоваться при нажатии кнопки Сжатие без потерь в меню &quot;Создание видео&quot;</translation>
    </message>
    <message>
        <source>Default advanced rendering options</source>
        <translation>Дополнительные параметры создания видеофайла (по умолчанию)</translation>
    </message>
    <message>
        <source>File format</source>
        <translation>Формат файла</translation>
    </message>
    <message>
        <source>Selects the default file type to use for the rendering out of the proposed list.</source>
        <translation>Выберите из выпадающего списка  формат создаваемого файла (по умолчанию).</translation>
    </message>
    <message>
        <source>Video standard</source>
        <translation>Стандарт видео</translation>
    </message>
    <message>
        <source>Selects the default video standard to use: PAL or NTSC.</source>
        <translation>Выберите используемый стандарт видео, PAL или NTSC.</translation>
    </message>
    <message>
        <source>Format</source>
        <translation>Формат</translation>
    </message>
    <message>
        <source>Selects the default image format to use for the rendering out of the proposed list.</source>
        <translation>Выберите из выпадающего списка формат изображения создаваемого видеофайла (по умолчанию).</translation>
    </message>
    <message>
        <source>Video codec</source>
        <translation>Видео кодек</translation>
    </message>
    <message>
        <source>Selects the default video codec to use for the rendering out of the proposed list.</source>
        <translation>Выберите из выпадающего списка видео кодек для создаваемого файла (по умолчанию).</translation>
    </message>
    <message>
        <source>Selects the default bit rate to use for video during the rendering out of the proposed list.</source>
        <translation>Выберите из выпадающего списка битрейт видео создаваемого файла (по умолчанию).</translation>
    </message>
    <message>
        <source>Audio codec</source>
        <translation>Аудио кодек</translation>
    </message>
    <message>
        <source>Selects the default audio codec to use for the rendering out of the proposed list.</source>
        <translation>Выберите из выпадающего списка аудио кодек для создаваемого файла (по умолчанию).</translation>
    </message>
    <message>
        <source>Selects the default bit rate to use for audio during the rendering out of the proposed list.</source>
        <translation>Выберите из выпадающего списка битрейт аудио создаваемого файла (по умолчанию).</translation>
    </message>
    <message>
        <source>Other actions</source>
        <translation>Другие действия</translation>
    </message>
    <message>
        <source>If the &lt;B&gt;Automatically crop 1920x1088 video to 1920x1080&lt;/B&gt; is checked then video images are automatically cropped. </source>
        <translation>Если установлен флажок &lt;B&gt;Автоматическая обрезка видео 1920x1088 до 1920x1080&lt;/B&gt;, то видеоизображение автоматически обрезается.</translation>
    </message>
    <message>
        <source>Remark: Some manufacturers produce FullHD videos 1920x1088 rather than 1920x1080. They make it to accelerate the encoding which is faster with a multiple of 16 lines. But this size is not 16:9. To keep the whole image, not only the image is deformed to fit into the screen but besides black bands appear on the sides. To avoid all these problems, by checking this box, these videos are truncated to be returned to the 1920x1080 sizes. Then 4 lines are cut at the top and bottom.</source>
        <translation>Примечание: некоторые производители создают FullHD видео с разрешением 1920 × 1088, а не 1920 × 1080. Они делают это для ускорения кодирования, которое происходит быстрее, если кратно 16 линиям. Но этот размер не 16:9. При вписании в экран изображения целиком, без деформации появляются черные полосы по бокам. Чтобы избежать всех этих проблем, установите этот флажок и такое видео будет обрезано до размера 1920 × 1080. По 4 строки обрезается сверху и снизу.</translation>
    </message>
    <message>
        <source>Remark: Some manufacturers produce videos using interlaced mode. They make it to accelerate the encoding. The problem is it deforms the image on which moved lines appear. For more information on interlaced video, see this Wikipedia page: </source>
        <translation>Примечание: некоторые производители выпускают видео, используя режим чересстрочной развертки. Они делают это, чтобы ускорить кодирование. Проблема в том, что он искажает изображение, на котором появляются линии движения. Для получения дополнительной информации по видео с чересстрочной разверткой, см. соответствующую статью в Википедии: </translation>
    </message>
    <message>
        <source>4:3: Corresponds to an old TV with (almost) square screen</source>
        <translation>4:3: соответствует старому телевизору с (почти) квадратным экраном</translation>
    </message>
    <message>
        <source>16:9: Corresponds to a modern TV with rectangular screen</source>
        <translation>16:9: соответствует современному телевизору с прямоугольным экраном</translation>
    </message>
    <message>
        <source>2.35:1: Corresponds to the Cinema format (on a TV, this format will use black strips at the top and below).</source>
        <translation>2.35:1: соответствует формату кино (на экране телевизора, это формат приведет к появлению черных полос вверху и внизу).</translation>
    </message>
    <message>
        <source>This group of settings applies to the new text blocks created in slide dialogue by means of this button: </source>
        <translation>Эта группа настроек применяется к новым текстовым блокам, созданным в окне редактирования слайда с помощью этой кнопки: </translation>
    </message>
    <message>
        <source>This group of settings applies to the new image or video blocks created from the main window by means of this button: </source>
        <translation>Эта группа настроек применяется к новому изображению или видео, созданным из главного окна с помощью этой кнопки: </translation>
    </message>
    <message>
        <source>Select, for each image format, the style of framing and the style of positioning to be applied to new blocks.</source>
        <translation>Выберите для каждого формата изображений стили кадрирования и позиционирования, применяемые к новым блокам.</translation>
    </message>
    <message>
        <source>This group of settings applies to the new image or video blocks created in slide dialogue by means of this button: </source>
        <translation>Эта группа настроек применяется к новому изображению или видео, созданным в окне редактирования слайда с помощью этой кнопки: </translation>
    </message>
    <message>
        <source>Bitrate</source>
        <translation>Битрейт</translation>
    </message>
    <message>
        <source>This dialog box allows you to define options for the application. It consists of the following 3 tabs:</source>
        <translation>Это диалоговое окно позволяет определить настройки программы. Оно состоит из следующих 3 вкладок:</translation>
    </message>
    <message>
        <source>The Application options tab allows you to define the general behavior of ffDiaporama.</source>
        <translation>Вкладка &quot;Параметры программы&quot; позволяет определять общее поведение ffDiaporama.</translation>
    </message>
    <message>
        <source>The Project options tab allows you to define the options by default of the current project and for the new projects.</source>
        <translation>Вкладка &quot;Параметры проекта&quot; позволяет задать настройки по умолчанию как для текущего проекта, так и для новых проектов.</translation>
    </message>
    <message>
        <source>The Rendering options Tab allows you to define the options used by default during the generation of videos.</source>
        <translation>Вкладка &quot;Параметры создания файла&quot; позволяет задать настройки, используемые по умолчанию при создании видео.</translation>
    </message>
    <message>
        <source>Disable tooltips in dialog box</source>
        <translation>Отключить всплывающие подсказки в диалоговых окнах</translation>
    </message>
    <message>
        <source>If this box is checked, tooltips will no longer appear in dialog boxes (only what&apos;s this will be available).</source>
        <translation>Если этот флажок установлен, всплывающие подсказки больше не будут появляться в диалоговых окнах.</translation>
    </message>
    <message>
        <source>Offer to open the download Web page when a new version is available</source>
        <translation>Предлагать открыть страницу загрузки при появлении новой версии</translation>
    </message>
    <message>
        <source>If this box is checked, a dialog box will appear at startup the next time a new version will be available. </source>
        <translation>Если этот флажок установлен, при появлении новой версии во время запуска появится диалоговое окно.</translation>
    </message>
    <message>
        <source>By default, this box is checked for Windows users and unchecked for Linux users</source>
        <translation>По умолчанию, этот флажок установлен для Windows пользователей и снят для Linux пользователей</translation>
    </message>
    <message>
        <source>Defines the quantity of memory used as cache memory by ffDiaporama. This parameter is important because it allows to adapt ffDiaporama to your hardware. </source>
        <translation>Определяет количество памяти, используемой в качестве кэш-памяти ffDiaporama. Этот параметр важен, поскольку позволяет адаптировать ffDiaporama под ваш компьютер.</translation>
    </message>
    <message>
        <source>For users of 32-bit systems, it is recommended that set this value to 512 MB if the computer has at least 2 GB of RAM. </source>
        <translation>Для пользователей 32-битных систем рекомендуется установить это значение на 512 Мб, если компьютер имеет по крайней мере 2 Гб оперативной памяти.</translation>
    </message>
    <message>
        <source>For users of 64-bit systems, it is recommended that set this value to 2 GB if the computer has at least 4 GB of RAM.</source>
        <translation>Для пользователей 64-битных систем рекомендуется установить это значение на 2 Гб, если компьютер имеет по крайней мере 4 Гб оперативной памяти.</translation>
    </message>
    <message>
        <source>Max video preview height</source>
        <translation>Максимальная высота видео при предпросмотре</translation>
    </message>
    <message>
        <source>Sets the maximum height of videos used for the preview. Beyond this height, the videos are automatically reduced for creating images. </source>
        <translation>Определяет максимальную высоту видео, используемого при предварительном просмотре.
Видео, превышающее эту высоту, будет автоматически уменьшено. </translation>
    </message>
    <message>
        <source>This parameter affects only the preview and does not change the quality of rendered video. </source>
        <translation>Этот параметр влияет только на предварительный просмотр и не изменяет качества создаваемого видео.</translation>
    </message>
    <message>
        <source>It is recommended to reduce this value for slow computer.</source>
        <translation>Рекомендуется уменьшить это значение для медленного компьютера.</translation>
    </message>
    <message>
        <source>This effect consumes lots of resources and can result in slow preview on small machines. Unchecking this box allows then to keep a fluid preview. </source>
        <translation>Этот эффект потребляет много ресурсов и может привести к медленному предварительному просмотру на слабых машинах. Снимите этот флажок чтобы вернуть скорость предварительного просмотра.</translation>
    </message>
    <message>
        <source>This parameter affects only the preview and does not change the quality of rendered video.</source>
        <translation>Этот параметр влияет только на предварительный просмотр и не изменяет качества создаваемого видео.</translation>
    </message>
    <message>
        <source>Sound sample rate</source>
        <translation>Частота дискретизации звука</translation>
    </message>
    <message>
        <source>Defines the frequency of the sound generated to show the preview. </source>
        <translation>Определяет частоту звука для воспроизведения при предварительном просмотре.</translation>
    </message>
    <message>
        <source>Video cropping</source>
        <translation>Обрезка видео</translation>
    </message>
    <message>
        <source>Video deinterlacing</source>
        <translation>Устранение чересстрочности видео</translation>
    </message>
    <message>
        <source>Various options</source>
        <translation>Разные настройки</translation>
    </message>
    <message>
        <source>Short date format</source>
        <translation>Краткий формат даты</translation>
    </message>
    <message>
        <source>This option allows you to specify the format in which computed dates are displayed. </source>
        <translation>Этот параметр позволяет выбрать формат в котором будет отображаться дата.</translation>
    </message>
    <message>
        <source>Normally this format depends on the language used on your system, but it can be useful to change it especially if the interface is not available for your language.</source>
        <translation>Обычно этот формат зависит от языка, используемого в вашей системе, но бывает необходимо изменить его, особенно если отсутствует интерфейс для вашего языка.</translation>
    </message>
    <message>
        <source>Defines the default value for the field Author that is often so called Artist by </source>
        <translation>Определяет значение по умолчанию для поля Автор, которое часто именуется Артист</translation>
    </message>
    <message>
        <source>Media Center Systems</source>
        <translation>мультимедиа системами</translation>
    </message>
    <message>
        <source>Enhance id3v2 comptatibility</source>
        <translation>Повышенная совместимость с id3v2</translation>
    </message>
    <message>
        <source>For more compatibility with the standard id3v2, check this box to limit Title, Author and Album fields to 30 characters</source>
        <translation>Установите этот флажок для большей совместимости со стандартом id3v2 (ограничение полей Название, Автор и Альбом 30 символами)</translation>
    </message>
    <message>
        <source>Default thumbnail</source>
        <translation>Обложка по умолчанию</translation>
    </message>
    <message>
        <source>Defines the model use as default thumbnail. Thumbnails are images that are generated along with the videos. These images are used as a poster by most </source>
        <translation>Выбрать шаблон, используемый в качестве обложки по умолчанию. Обложки - это изображения, которые создаются вместе с видеофайлом. Эти изображения используются как постер многими</translation>
    </message>
    <message>
        <source>For more information on joined files, see &lt;a href=&quot;003A.html&quot;&gt;File attachments&lt;/a&gt;</source>
        <translation>Для более подробной информации о присоединяемых файлах смотрите &lt;a href=&quot;003A.html&quot;&gt;Присоединяемые файлы&lt;/a&gt;</translation>
    </message>
    <message>
        <source>Allows to select the style of the shape to applied to the new text blocks. This style defines the shape (rectangle, circle, ...), the border, the opaqueness and the shadow effect applied to the block.</source>
        <translation>Позволяет выбрать тип фигуры, применяемый к новому текстовому блоку. Этот стиль определяет форму (прямоугольник, круг, ...), границы, непрозрачность и эффект тени, применяемый к блоку.</translation>
    </message>
    <message>
        <source>Default joined files options</source>
        <translation>Настройки присоединяемых ресурсов (по умолчанию)</translation>
    </message>
    <message>
        <source>Join thumbnail to rendered file</source>
        <translation>Присоединить обложку к создаваемому файлу</translation>
    </message>
    <message>
        <source>If this box is checked then a thumbnail file will be created with video.</source>
        <translation>Если этот флажок установлен, обложка будет создана вместе с видеофайлом.</translation>
    </message>
    <message>
        <source>Join XBMC .nfo file to rendered file</source>
        <translation>Присоединить XBMC .nfo файл к создаваемому файлу</translation>
    </message>
    <message>
        <source>If this box is checked then a XMBC .nfo file will be created with video.</source>
        <translation>Если этот флажок установлен, XMBC .nfo файл будет создан вместе с видеофайлом.</translation>
    </message>
    <message>
        <source>Frequency</source>
        <translation>Частота</translation>
    </message>
    <message>
        <source>Select the default frequency to use for audio during the rendering.</source>
        <translation>Выберите частоту аудио создаваемого файла (по умолчанию).</translation>
    </message>
    <message>
        <source>Default soundtrack rendering options</source>
        <translation>Параметры создания аудиофайла (по умолчанию)</translation>
    </message>
    <message>
        <source>At the bottom of the dialog these buttons allow you to:</source>
        <translation>В нижней части диалогового окна следующие кнопки позволяют:</translation>
    </message>
    <message>
        <source> Check configuration allows to open the &lt;a href=&quot;0106.html&quot;&gt;Check configuration dialog&lt;/a&gt;</source>
        <translation> Проверить конфигурацию, открыв диалоговое окно &lt;a href=&quot;0106.html&quot;&gt;Проверить конфигурацию&lt;/a&gt;</translation>
    </message>
    <message>
        <source> Manage device allows to open the &lt;a href=&quot;0102.html&quot;&gt;Manage device dialog&lt;/a&gt;</source>
        <translation> Управлять устройствами, открыв диалоговое окно &lt;a href=&quot;0102.html&quot;&gt;Управление устройствами&lt;/a&gt;</translation>
    </message>
    <message>
        <source>Fill with project folder name when project save : The title will take the same name as the folder in which is save the .ffd file</source>
        <translation>Использовать имя папки проекта при сохранении: название будет таким же, как имя папки, в которой находится .ffd файл</translation>
    </message>
    <message>
        <source>Network settings</source>
        <translation>Параметры сети</translation>
    </message>
    <message>
        <source>Use a proxy to access the Internet</source>
        <translation>Использовать прокси для доступа в Интернет</translation>
    </message>
    <message>
        <source>Check this box if your network requires that you use a proxy.</source>
        <translation>Установите этот флажок, если в вашей сети требуется использование прокси-сервера.</translation>
    </message>
    <message>
        <source>Proxy address</source>
        <translation>Прокси адрес</translation>
    </message>
    <message>
        <source>Enter address of the proxy host.</source>
        <translation>Введите адрес прокси-сервера.</translation>
    </message>
    <message>
        <source>Proxy port</source>
        <translation>Порт</translation>
    </message>
    <message>
        <source>Enter the port number to access the proxy or nothing to use default port.</source>
        <translation>Введите номер порта для доступа к прокси или оставьте пустым, чтобы использовать порт по умолчанию.</translation>
    </message>
    <message>
        <source>Login</source>
        <translation>Логин</translation>
    </message>
    <message>
        <source>Enter the login name to access the proxy or nothing if no login is required.</source>
        <translation>Введите имя пользователя для доступа к прокси или оставьте пустым, если логин не требуется.</translation>
    </message>
    <message>
        <source>Password</source>
        <translation>Пароль</translation>
    </message>
    <message>
        <source>Enter the login password to access the proxy or nothing if no login is required.</source>
        <translation>Введите пароль пользователя для доступа к прокси или оставьте пустым, если пароль не требуется.</translation>
    </message>
    <message>
        <source>Distance unit</source>
        <translation>Единица измерения расстояния</translation>
    </message>
    <message>
        <source>This option lets you specify the unit to be used for distances.</source>
        <translation>Этот параметр позволяет выбрать единицу измерения расстояния.</translation>
    </message>
    <message>
        <source>Album</source>
        <translation>Альбом</translation>
    </message>
    <message>
        <source>Defines the default value for the field Album</source>
        <translation>Определяет значение поля Альбом по умолчанию</translation>
    </message>
    <message>
        <source>Default sound level</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set the volume level to be achieved by amplification for music and audio tracks when the volume is set to auto</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>0102</name>
    <message>
        <source>Manage devices dialog</source>
        <translation>Диаголовое окно Управление устройствами</translation>
    </message>
    <message>
        <source>The default database (supplied with ffDiaporama). These devices are registered in the global ffDiaporama configuration file.</source>
        <translation>База данных по умолчанию (поставляется с ffDiaporama). Эти устройства, зарегистрированы в глобальном файле конфигурации ffDiaporama.</translation>
    </message>
    <message>
        <source>The devices which you modify or add. These are registered in your personal configuration file.</source>
        <translation>Устройства, которые вы изменили или добавили. Они регистрируются в вашем личном файле конфигурации.</translation>
    </message>
    <message>
        <source>You must first create a device</source>
        <translation>Сперва вы должны создать устройство</translation>
    </message>
    <message>
        <source>You define the various parameters</source>
        <translation>Затем задать различные  параметры обработки</translation>
    </message>
    <message>
        <source>You click the &quot;Apply modifications&quot; button to register the parameters</source>
        <translation>Нажать кнопку &quot;Применить изменения&quot; для регистрации параметров</translation>
    </message>
    <message>
        <source>Remarks:</source>
        <translation>Примечания:</translation>
    </message>
    <message>
        <source>Device subtype</source>
        <translation>Подтип устройства</translation>
    </message>
    <message>
        <source>Allows you to select the category in which the equipment is classified</source>
        <translation>Позволяет выбрать категорию, в которой позиционируется оборудование</translation>
    </message>
    <message>
        <source>Device model</source>
        <translation>Модель устройства</translation>
    </message>
    <message>
        <source>Note that you can delete only devices which you created - those shown with this icon: </source>
        <translation>Обратите внимание, что удалить можно только устройства, созданные вами. Они помечены значком: </translation>
    </message>
    <message>
        <source>Enter here the name of the device (free text entry field) and then, enter all the parameters required for rendering videos that are to be associated with the device profile (File format, video Standard, etc.)</source>
        <translation>Введите здесь имя устройства (обычное текстовое поле) и укажите все параметры, необходимые для создания видео, которые должны быть связаны с профилем устройства (формат файла, стандарт видео, и т.д.)</translation>
    </message>
    <message>
        <source>Devices preceded by this icon are defined in the default database.</source>
        <translation>Устройства, помеченные этим значком, внесены в базу данных по умолчанию.</translation>
    </message>
    <message>
        <source>Devices preceded by this icon are those that you defined yourself, or those from the default database that you have modified.</source>
        <translation>Устройства, помеченные этим значком, созданы или изменены вами.</translation>
    </message>
    <message>
        <source>Add device: Allows you to create a new device which will be added to the database. </source>
        <translation>Добавить устройство: позволяет создать новое устройство, которое будет добавлено в базу данных. </translation>
    </message>
    <message>
        <source>The creation of a new device is made in 3 steps: </source>
        <translation>Создание нового устройства производится в 3 шага: </translation>
    </message>
    <message>
        <source>Remove device: Allows you to delete a device. </source>
        <translation>Удалить устройство: позволяет удалить устройство. </translation>
    </message>
    <message>
        <source>Reset to default: Cancels the modifications that you made on a device defined in the default ffDiaporama database</source>
        <translation>По умолчанию: отменяет изменения, сделанные с устройствами базы данных ffDiaporama по умолчанию</translation>
    </message>
    <message>
        <source>The device type zone allows you to select the type of equipment to be shown in the list.</source>
        <translation>Поле Категория устройства позволяет выбрать тип оборудования, которое будет отображаться в списке.</translation>
    </message>
    <message>
        <source>The list shows the categories and the device types present in the database.</source>
        <translation>В списке перечислены категории и типы устройств, присутствующих в базе данных.</translation>
    </message>
    <message>
        <source>The following buttons allow you to act on the database:</source>
        <translation>Следующие кнопки позволяют работать в базе данных:</translation>
    </message>
    <message>
        <source>This dialog box allows you to modify the equipment profiles database.</source>
        <translation>Это диалоговое окно позволяет изменять базу данных профилей устройств.</translation>
    </message>
    <message>
        <source>The database is actually composed of two parts:</source>
        <translation>База данных состоит из двух частей:</translation>
    </message>
</context>
<context>
    <name>0103</name>
    <message>
        <source>Add or modify a predefined title slide</source>
        <translation>Добавление или изменение слайда из шаблона</translation>
    </message>
    <message>
        <source>This dialog allows you to select a model and define chapter information for predefined title slides.</source>
        <translation>Это диалоговое окно позволяет выбрать шаблон и определить информацию о главе для предустановленных шаблонов заголовков.</translation>
    </message>
    <message>
        <source>To understand the differences between &lt;B&gt;&lt;I&gt;Predefined title slides&lt;/I&gt;&lt;/B&gt; and &lt;B&gt;&lt;I&gt;Standard slides&lt;/I&gt;&lt;/B&gt;, see: &lt;a href=&quot;0012.html&quot;&gt;Predefined title slide&lt;/a&gt;</source>
        <translation>для понимания разницы между &lt;B&gt;&lt;I&gt;Слайдом из шаблона&lt;/I&gt;&lt;/B&gt; и &lt;B&gt;&lt;I&gt;обычным слайдом&lt;/I&gt;&lt;/B&gt; смотрите: &lt;a href=&quot;0012.html&quot;&gt;Шаблоны заголовков слайда&lt;/a&gt;</translation>
    </message>
    <message>
        <source>At the top of the box, the following two settings allow you to filter the Predefined title slide that are displayed in the selection area.</source>
        <translation>В верхней части диалогового окна следующие два параметра позволяют фильтровать шаблоны заголовков слайда, которые отображаются в области выбора.</translation>
    </message>
    <message>
        <source>Slide type</source>
        <translation>Тип слайда</translation>
    </message>
    <message>
        <source>You can select between: </source>
        <translation>Вы можете выбирать из: </translation>
    </message>
    <message>
        <source>Project title</source>
        <translation>Название проекта</translation>
    </message>
    <message>
        <source>This type of slide is usually used early in the project as the opening credits. </source>
        <translation>Этот тип слайда обычно используется в начале проекта в качестве вступительных титров.</translation>
    </message>
    <message>
        <source>The texts variables that are used by the models of this slide type are based only on project information. For more information on project information, see: &lt;a href=&quot;0108.html&quot;&gt;Project properties dialog&lt;/a&gt;</source>
        <translation>Тексты переменных, используемых в шаблонах этого типа слайда, основаны только на информации о проекте. Более подробно об информации о проекте, см.: &lt;a href=&quot;0108.html&quot;&gt; Свойства проекта&lt;/a&gt;</translation>
    </message>
    <message>
        <source>Chapter title</source>
        <translation>Название главы</translation>
    </message>
    <message>
        <source>This type of slide is usually used several times in the project to mark the beginning of the chapter. </source>
        <translation>Это тип слайда обычно используется несколько раз в проекте для обозначения начала главы. </translation>
    </message>
    <message>
        <source>The texts variables that are used by the models of this slide type are based on project information and on chapter information.</source>
        <translation>Тексты переменных, используемых в шаблонах этого типа слайда, основаны на информации о проекте и информации о главе.</translation>
    </message>
    <message>
        <source>Credit title</source>
        <translation>Заключительный</translation>
    </message>
    <message>
        <source>This type of slide is usually used at the end of the project as the end credits. </source>
        <translation>Этот тип слайда обычно используется в конце проекта в качестве заключительных титров. </translation>
    </message>
    <message>
        <source>The texts variables that are used by the models of this slide type are generally computed. For more information on texts variables, see: &lt;a href=&quot;0013.html&quot;&gt;Dynamic variables&lt;/a&gt;</source>
        <translation>Тексты переменных, используемых в шаблонах этого типа слайда, в основном расчетные. Более подробно о текстовых переменных, см.: &lt;a href=&quot;0108.html&quot;&gt;Динамические переменные&lt;/a&gt;</translation>
    </message>
    <message>
        <source>Category</source>
        <translation>Категория</translation>
    </message>
    <message>
        <source>Statics models</source>
        <translation>Простые без анимации</translation>
    </message>
    <message>
        <source>This type lists statics models ie without animations.</source>
        <translation>Этот тип содержит простые шаблоны без анимации.</translation>
    </message>
    <message>
        <source>Animated models</source>
        <translation>Анимированные</translation>
    </message>
    <message>
        <source>This type lists animated models ie with several shots.</source>
        <translation>Этот тип содержит анимированные шаблоны, т.е. с несколькими кадрами.</translation>
    </message>
    <message>
        <source>Custom models</source>
        <translation>Пользовательские</translation>
    </message>
    <message>
        <source>This type lists the templates that you saved with the &lt;B&gt;&lt;I&gt;Save as model&lt;/I&gt;&lt;/B&gt; function of the &lt;a href=&quot;0119.html&quot;&gt;Slide properties&lt;/a&gt; dialog box.</source>
        <translation>Этот тип содержит шаблоны, которые вы сохранили с помощью кнопки &lt;B&gt;&lt;I&gt;Сохранить как шаблон&lt;/I&gt;&lt;/B&gt; диалогового окна &lt;a href=&quot;0119.html&quot;&gt;Параметры слайда&lt;/a&gt;.</translation>
    </message>
    <message>
        <source> The selection area display models corresponding to the current Type and Category you previously selected.</source>
        <translation>Область выбора показывает шаблоны, соответствующие выбранному типу и категории.</translation>
    </message>
    <message>
        <source>The models are displayed and played, so you can see the slide as it will appear in your project with the content of dynamic variables.</source>
        <translation>Шаблоны отображаются в динамике (воспроизводятся), поэтому вы можете видеть слайд так,  как он будет выглядеть в вашем проекте с содержимым динамических переменных.</translation>
    </message>
    <message>
        <source>The slide duration is displayed on the bottom of each thumbnails model.</source>
        <translation>Длительность слайда отображается в нижней части каждой миниатюры шаблона.</translation>
    </message>
    <message>
        <source>When your selection of model is made, the following settings are available if slide type is &lt;B&gt;&lt;I&gt;Chapter model&lt;/I&gt;&lt;/B&gt;:</source>
        <translation>После выбора шаблона, доступны следующие параметры если тип слайда &lt;B&gt;&lt;I&gt;Название главы&lt;/I&gt;&lt;/B&gt;:</translation>
    </message>
    <message>
        <source>Chapter name</source>
        <translation>Название главы</translation>
    </message>
    <message>
        <source>Enter here the name of the chapter.</source>
        <translation>Введите здесь название главы.</translation>
    </message>
    <message>
        <source>Chapter date different from project date</source>
        <translation>Дата главы отличается от даты проекта</translation>
    </message>
    <message>
        <source>If this box is checked, the date of the chapter is different from the date of the project. </source>
        <translation>Если этот флажок установлен, дата главы отличается от даты проекта.</translation>
    </message>
    <message>
        <source>Remark: It is often useful to differentiate the date of the chapter of the date of the project. </source>
        <translation>Примечание: зачастую полезно различать дату главы и дату проекта.</translation>
    </message>
    <message>
        <source>Event date</source>
        <translation>Дата</translation>
    </message>
    <message>
        <source>Select a date for the chapter. </source>
        <translation>Выберите дату главы. </translation>
    </message>
    <message>
        <source>Remark: This field is enabled only if the &lt;I&gt;&lt;B&gt;Chapter date different from project date&lt;/B&gt;&lt;/I&gt; check box is checked.</source>
        <translation>Примечание: это поле активно только если установлен флажок &lt;I&gt;&lt;B&gt;Дата главы отличается от даты проекта&lt;/B&gt;&lt;/I&gt;.</translation>
    </message>
    <message>
        <source>Override date</source>
        <translation>Замещающая дата</translation>
    </message>
    <message>
        <source>Check this box to override the date and offer you to enter the date as a free multi-line text. </source>
        <translation>Отметьте этот флажок, чтобы ввести дату вручную в нужном вам формате (как простой текст).</translation>
    </message>
    <message>
        <source>Under these settings, the following two buttons allow you:</source>
        <translation>Под этими настройками расположено две кнопки:</translation>
    </message>
    <message>
        <source> Project properties</source>
        <translation>Свойства проекта</translation>
    </message>
    <message>
        <source>This button allows you to open &lt;a href=&quot;0108.html&quot;&gt;Project properties dialog&lt;/a&gt;.</source>
        <translation>Эта кнопка позволяет открыть диалоговое окно &lt;a href=&quot;0108.html&quot;&gt;Свойства проекта&lt;/a&gt;.</translation>
    </message>
    <message>
        <source> Convert to standard slide</source>
        <translation>Преобразовать в обычный слайд</translation>
    </message>
    <message>
        <source>This button allows you to convert this slide to a standard slide which are fully customizable.</source>
        <translation>Эта кнопка позволяет преобразовать этот слайд в обычный слайд, который полностью настраиваем.</translation>
    </message>
    <message>
        <source>For example, if the project is &lt;U&gt;My vacation from 1 to 15&lt;/U&gt;, the chapter may be limited to the &lt;U&gt;3&lt;/U&gt;.</source>
        <translation>Например, если проект называется &lt;U&gt;Мой отпуск с 1 по 15&lt;/U&gt;, то глава может быть ограничена &lt;U&gt;3 числом&lt;/U&gt;.</translation>
    </message>
    <message>
        <source>Chapter location different from project location</source>
        <translation>Местоположение главы отличается от местоположения проекта</translation>
    </message>
    <message>
        <source>If this box is checked, the location of the chapter is different from the location of the project. </source>
        <translation>Если этот флажок установлен, местоположение главы отличается от местоположения проекта. </translation>
    </message>
    <message>
        <source>Remark: It is often useful to differentiate the location of the chapter of the location of the project. </source>
        <translation>Примечание: зачастую полезно различать местоположение главы и местоположение проекта. </translation>
    </message>
    <message>
        <source>For example, if the project location is &lt;U&gt;where I rented for the holidays&lt;/U&gt;, the chapter location may be &lt;U&gt;where I went on tour&lt;/U&gt;.</source>
        <translation>Например, если местоположение проекта &lt;U&gt;где я провел праздники&lt;/U&gt;, то местоположение главы может быть &lt;U&gt;где я был на экскурсии&lt;/U&gt;.</translation>
    </message>
    <message>
        <source>Event location</source>
        <translation>Местоположение события</translation>
    </message>
    <message>
        <source>The location where the chapter&apos;s event took place</source>
        <translation>Место, где произошло событие проекта</translation>
    </message>
    <message>
        <source>Click on this </source>
        <translation>Нажмите на </translation>
    </message>
    <message>
        <source> button to select a location from the &lt;a href=&quot;0123.html&quot;&gt;Add or modify a location&lt;/a&gt; dialog or using a favorite</source>
        <translation> кнопку для выбора местоположения из диалогового окна &lt;a href=&quot;0123.html&quot;&gt;Добавить или изменить местоположение&lt;/a&gt; или Избранного</translation>
    </message>
    <message>
        <source> button to remove actual location (set to empty)</source>
        <translation> кнопку для удаления текущего местоположения (очистить)</translation>
    </message>
    <message>
        <source>Remark: These fields and buttons are enabled only if the &lt;I&gt;&lt;B&gt;Chapter location different from project location&lt;/B&gt;&lt;/I&gt; check box is checked.</source>
        <translation>Примечание: эти поля активны только если установлен флажок &lt;I&gt;&lt;B&gt;Местоположение главы отличается от местоположения проекта&lt;/B&gt;&lt;/I&gt;.</translation>
    </message>
</context>
<context>
    <name>0104</name>
    <message>
        <source>Background properties</source>
        <translation>Свойства фона</translation>
    </message>
    <message>
        <source>Same background as preceding object.</source>
        <translation>Тот же фон, что и у предыдущего объекта.</translation>
    </message>
    <message>
        <source> If this option is selected, the slide will have no background definition  but will use the same background as the previous slide: </source>
        <translation>Если этот параметр выбран, настройка фона слайда будет недоступна и фон будет как у предыдущего слайда: </translation>
    </message>
    <message>
        <source>If the previous slide does not have a background definition either, the check continues backwards until a slide is found which does have a background definition.</source>
        <translation>если предыдущий слайд не имеет фона, то будет найден первый предыдущий слайд, имеющий фон.</translation>
    </message>
    <message>
        <source>If no previous slide has a background definition, then a black frame will be used.</source>
        <translation>если нет предыдущего слайда, имеющего фон, то будет использоваться черная рамка.</translation>
    </message>
    <message>
        <source>Select a new background</source>
        <translation>Выбор нового фона</translation>
    </message>
    <message>
        <source> If this option is selected, the slide will have its own background definition. In that case, the following zones set properties for the background. </source>
        <translation>Если выбрана эта опция, слайд будет иметь свой собственный фон. В этом случае будут доступны следующие параметры настройки фона. </translation>
    </message>
    <message>
        <source>Solid brush</source>
        <translation>Твердая кисть</translation>
    </message>
    <message>
        <source>Selects a plain color.</source>
        <translation>позволяет выбрать сплошной цвет.</translation>
    </message>
    <message>
        <source>Gradient 2 colors</source>
        <translation>Градиент из двух цветов</translation>
    </message>
    <message>
        <source>Selects a gradient of 2 colors</source>
        <translation>позволяет выбрать градиент, состоящий из 2 цветов</translation>
    </message>
    <message>
        <source>Gradient 3 colors</source>
        <translation>Градиент из трех цветов</translation>
    </message>
    <message>
        <source>Selects a gradient of 3 colors</source>
        <translation>позволяет выбрать градиент, состоящий из 3 цветов</translation>
    </message>
    <message>
        <source>Image from library</source>
        <translation>Изображение из библиотеки</translation>
    </message>
    <message>
        <source>Image disk</source>
        <translation>Изображение с диска</translation>
    </message>
    <message>
        <source>Allows you to select a photo or an image. </source>
        <translation>позволяет выбрать фотографию или изображение из файла на диске.</translation>
    </message>
    <message>
        <source>File</source>
        <translation>Файл</translation>
    </message>
    <message>
        <source>Indicates the name of the current file</source>
        <translation>Указывает имя текущего файла</translation>
    </message>
    <message>
        <source>Keep aspect ratio</source>
        <translation>Сохранить пропорции</translation>
    </message>
    <message>
        <source>Full filling</source>
        <translation>Растянуть</translation>
    </message>
    <message>
        <source>Allows the image to fill the whole screen with image deformation as needed.</source>
        <translation>Позволяет растянуть изображение  на весь экран, даже если будет при этом деформировано.</translation>
    </message>
    <message>
        <source>Allow you to selects an image file</source>
        <translation>Позволяет выбрать файл с изображением</translation>
    </message>
    <message>
        <source>If this box is checked, then the image will not be deformed, and: </source>
        <translation>Если этот флажок установлен, изображение не деформируется и: </translation>
    </message>
    <message>
        <source> Open the &lt;a href=&quot;0110.html&quot;&gt;Image framing and correction dialog&lt;/a&gt; to regulate framing and image corrections </source>
        <translation>открывается диалоговое окно &lt;a href=&quot;0110.html&quot;&gt;Кадрирование и коррекция изображения&lt;/a&gt; для обрезки и коррекции изображения </translation>
    </message>
    <message>
        <source>Selects a background image from the library </source>
        <translation>позволяет выбрать предопределенный фон </translation>
    </message>
    <message>
        <source>Remark: By default, the library contains a dozen of background screens. </source>
        <translation>Примечание: по умолчанию библиотека содержит около десятка фоновых изображений. </translation>
    </message>
    <message>
        <source>Download extensions</source>
        <translation>Страница загрузки расширений</translation>
    </message>
    <message>
        <source>You can get additionals backgrounds installing the &lt;B&gt;&lt;U&gt;Texturemate&lt;/U&gt;&lt;/B&gt; extension from this page </source>
        <translation>Вы можете увеличить количество фоновых изображений, установив расширение &lt;B&gt;&lt;U&gt;Texturemate&lt;/U&gt;&lt;/B&gt; с этой страницы </translation>
    </message>
    <message>
        <source>The &quot;Background properties&quot; dialog allows you to define settings for the background of the slide.</source>
        <translation>Диалоговое окно &quot;Свойства фона&quot; позволяет определить параметры фона слайдов.</translation>
    </message>
</context>
<context>
    <name>0105</name>
    <message>
        <source>Chapter properties</source>
        <translation>Свойства главы</translation>
    </message>
    <message>
        <source> All slides have information chaptering so each slide can mark the beginning of a new chapter. </source>
        <translation>Каждый слайд может быть использован в качестве начала новой главы.</translation>
    </message>
    <message>
        <source>Remarks:</source>
        <translation>Примечания:</translation>
    </message>
    <message>
        <source>Except for the first chapter which start at 0, all other chapters begin after the entering transition.</source>
        <translation>Все главы кроме первой, которая начинается с 0, начинаются после входящего перехода.</translation>
    </message>
    <message>
        <source>The 1st slide of the mount always mark the beginning of a new chapter.</source>
        <translation>Первый слайд всегда служит в качестве начала новой главы.</translation>
    </message>
    <message>
        <source>Start a new chapter with this slide</source>
        <translation>Начать новую главу с этого слайда</translation>
    </message>
    <message>
        <source>If this box is checked, the slide will mark the beginning of a new chapter. </source>
        <translation>Если этот флажок установлен, слайд будет помечен как начало новой главы. </translation>
    </message>
    <message>
        <source>Chapter name</source>
        <translation>Название главы</translation>
    </message>
    <message>
        <source>Enter here the name of the chapter.</source>
        <translation>Введите здесь название главы.</translation>
    </message>
    <message>
        <source>Chapter date different from project date</source>
        <translation>Дата главы отличается от даты проекта</translation>
    </message>
    <message>
        <source>If this box is checked, the date of the chapter is different from the date of the project. </source>
        <translation>Если этот флажок установлен, дата главы отличается от даты проекта. </translation>
    </message>
    <message>
        <source>Remark: It is often useful to differentiate the date of the chapter of the date of the project. </source>
        <translation>Примечание: зачастую полезно различать дату главы и дату проекта. </translation>
    </message>
    <message>
        <source>Event date</source>
        <translation>Дата</translation>
    </message>
    <message>
        <source>Select a date for the chapter. </source>
        <translation>Выберите дату главы. </translation>
    </message>
    <message>
        <source>Remark: This field is enabled only if the &lt;I&gt;&lt;B&gt;Chapter date different from project date&lt;/B&gt;&lt;/I&gt; check box is checked.</source>
        <translation>Примечание: это поле активно, только если установлен флажок &lt;I&gt;&lt;B&gt;Дата главы отличается от даты проекта&lt;/B&gt;&lt;/I&gt;.</translation>
    </message>
    <message>
        <source>Check this box to override the date and offer you to enter the date as a free multi-line text. </source>
        <translation>Отметьте этот флажок, чтобы ввести дату вручную в нужном вам формате (как простой текст). </translation>
    </message>
    <message>
        <source>Remark: This box cannot be deactivated for the first slide of the project.</source>
        <translation>Примечание: этот флажок нельзя отключить для первого слайда проекта.</translation>
    </message>
    <message>
        <source>Override date</source>
        <translation>Замещающая дата</translation>
    </message>
    <message>
        <source>This dialog allows you to define settings for the chapter information of the slide:</source>
        <translation>Это диалоговое окно позволяет определить настройки информации о главе для слайда:</translation>
    </message>
    <message>
        <source>For example, if the project is &lt;U&gt;My vacation from 1 to 15&lt;/U&gt;, the chapter may be limited to the &lt;U&gt;3&lt;/U&gt;.</source>
        <translation>Например, если проект называется &lt;U&gt;Мой отпуск с 1 по 15&lt;/U&gt;, то глава может быть ограничена &lt;U&gt;3 числом&lt;/U&gt;.</translation>
    </message>
    <message>
        <source>Chapter location different from project location</source>
        <translation>Местоположение главы отличается от местоположения проекта</translation>
    </message>
    <message>
        <source>If this box is checked, the location of the chapter is different from the location of the project. </source>
        <translation>Если этот флажок установлен, местоположение главы отличается от местоположения проекта. </translation>
    </message>
    <message>
        <source>Remark: It is often useful to differentiate the location of the chapter of the location of the project. </source>
        <translation>Примечание: зачастую полезно различать местоположение главы и местоположение проекта. </translation>
    </message>
    <message>
        <source>For example, if the project location is &lt;U&gt;where I rented for the holidays&lt;/U&gt;, the chapter location may be &lt;U&gt;where I went on tour&lt;/U&gt;.</source>
        <translation>Например, если местоположение проекта &lt;U&gt;где я провел праздники&lt;/U&gt;, то местоположение главы может быть &lt;U&gt;где я был на экскурсии&lt;/U&gt;.</translation>
    </message>
    <message>
        <source>Event location</source>
        <translation>Местоположение события</translation>
    </message>
    <message>
        <source>The location where the chapter&apos;s event took place</source>
        <translation>Место, где произошло событие проекта</translation>
    </message>
    <message>
        <source>Click on this </source>
        <translation>Нажмите на </translation>
    </message>
    <message>
        <source> button to select a location from the &lt;a href=&quot;0123.html&quot;&gt;Add or modify a location&lt;/a&gt; dialog or using a favorite</source>
        <translation> кнопку для выбора местоположения из диалогового окна &lt;a href=&quot;0123.html&quot;&gt;Добавить или изменить местоположение&lt;/a&gt; или Избранного</translation>
    </message>
    <message>
        <source> button to remove actual location (set to empty)</source>
        <translation> кнопку для удаления текущего местоположения (очистить)</translation>
    </message>
    <message>
        <source>Remark: These fields and buttons are enabled only if the &lt;I&gt;&lt;B&gt;Chapter location different from project location&lt;/B&gt;&lt;/I&gt; check box is checked.</source>
        <translation>Примечание: эти поля активны только если установлен флажок &lt;I&gt;&lt;B&gt;Местоположение главы отличается от местоположения проекта&lt;/B&gt;&lt;/I&gt;.</translation>
    </message>
</context>
<context>
    <name>0106</name>
    <message>
        <source>Check configuration</source>
        <translation>Проверка конфигурации</translation>
    </message>
    <message>
        <source>This dialog allows to check external tools configuration and libraries used by ffDiaporama.</source>
        <translation>Это диалоговое окно позволяет проверить конфигурацию внешних инструментов и библиотек, используемых ffDiaporama.</translation>
    </message>
    <message>
        <source>It is especially useful for the Linux users and for those who compiles the application.</source>
        <translation>Оно особенно полезно для пользователей Linux и тех, кто компилирует приложение.</translation>
    </message>
    <message>
        <source>The most common shown errors concern the supported formats, codec and library versions.</source>
        <translation>Наиболее распространенные ошибки касаются поддерживаемых форматов, версий кодеков и библиотек.</translation>
    </message>
    <message>
        <source>To solve the problems you will have to install additional packages on your computer and may be to make ffDiaporama from source and verify again the configuration.</source>
        <translation>Для решения проблем вы должны будете установить дополнительные пакеты на ваш компьютер и, может быть, пересобрать ffDiaporama из исходников и снова проверить конфигурацию.</translation>
    </message>
</context>
<context>
    <name>0107</name>
    <message>
        <source>Export project</source>
        <translation>Экспорт проекта</translation>
    </message>
    <message>
        <source>This dialog box allows you to export the project and all ressources used by the project to a folder</source>
        <translation>Это диалоговое окно позволяет экспортировать проект и все используемые в нем ресурсы в папку</translation>
    </message>
    <message>
        <source>Destination folder</source>
        <translation>Папка назначения</translation>
    </message>
    <message>
        <source>Allows you to select the base destination folder. Click on the folder button to open the directory selector.</source>
        <translation>Позволяет указать папку назначения. Нажатие на кнопку в виде папки открывает окно выбора папок.</translation>
    </message>
    <message>
        <source>Project subfolder</source>
        <translation>Подпапка проекта</translation>
    </message>
    <message>
        <source> Once completed your selections, click the OK button to start the export. </source>
        <translation>После завершения выбора нажмите кнопку ОК, чтобы начать экспорт.</translation>
    </message>
    <message>
        <source>At any time during this process, you can click the cancel button to stop the export. </source>
        <translation>В любое время в течение этого процесса можно нажать кнопку Отмена, чтобы остановить экспорт.</translation>
    </message>
    <message>
        <source>Remarks:</source>
        <translation>Примечания:</translation>
    </message>
    <message>
        <source>The export takes into account all the resources that compose the project:</source>
        <translation>Экспортируются все ресурсы, составляющие проект:</translation>
    </message>
    <message>
        <source>Images</source>
        <translation>Изображения</translation>
    </message>
    <message>
        <source>Videos</source>
        <translation>Видеофайлы</translation>
    </message>
    <message>
        <source>Music</source>
        <translation>Музыка</translation>
    </message>
    <message>
        <source>Thumbnail elements</source>
        <translation>Элементы обложки</translation>
    </message>
    <message>
        <source>Wallpapers</source>
        <translation>Обои</translation>
    </message>
    <message>
        <source>clipart that are not stored under the ClipArt alias.</source>
        <translation>Клипарт, который не хранится в папке ClipArt.</translation>
    </message>
    <message>
        <source>Export does not just only copy the files. The following rules apply:</source>
        <translation>Экспорт не просто копирует файлы. Применяются следующие правила:</translation>
    </message>
    <message>
        <source>If multiple files from different directories have the same names, these files are re-named.</source>
        <translation>Если у нескольких файлов из разных папок одинаковые имена, то  эти файлы переименовываются.</translation>
    </message>
    <message>
        <source>A .ffd project file is created taking into account any changes in directory and file name.</source>
        <translation>При создании .ffd файла проекта учитываются любые изменения в имени папки или файла.</translation>
    </message>
    <message>
        <source>Allows you to select the folder name to be created for the project files. By default the project title is proposed.</source>
        <translation>Позволяет указать имя папки для файлов проекта. По умолчанию предлагается название проекта.</translation>
    </message>
</context>
<context>
    <name>0108</name>
    <message>
        <source>Project properties</source>
        <translation>Свойства проекта</translation>
    </message>
    <message>
        <source>This information will then be registered in the form of TAGs in the rendered video files. </source>
        <translation>Эта информация затем будет зарегистрирована в виде тегов в создаваемом видеофайле. </translation>
    </message>
    <message>
        <source>Some fields are automatically filled and do not appear in this dialog: </source>
        <translation>Некоторые поля заполняются автоматически и не появляются в этом диалоговом окне: </translation>
    </message>
    <message>
        <source>Remarks:</source>
        <translation>Примечания:</translation>
    </message>
    <message>
        <source>Settable fields</source>
        <translation>Настраиваемые поля</translation>
    </message>
    <message>
        <source>Fields</source>
        <translation>Поле</translation>
    </message>
    <message>
        <source>Remark</source>
        <translation>Примечание</translation>
    </message>
    <message>
        <source>Project geometry</source>
        <translation>Геометрия проекта</translation>
    </message>
    <message>
        <source>This field allows you to select the geometry to be used for the project. </source>
        <translation>Это поле позволяет выбрать геометрию, используемую в проекте.</translation>
    </message>
    <message>
        <source>Title</source>
        <translation>Название</translation>
    </message>
    <message>
        <source>Author</source>
        <translation>Автор</translation>
    </message>
    <message>
        <source>Album</source>
        <translation>Альбом</translation>
    </message>
    <message>
        <source>Language</source>
        <translation>Язык</translation>
    </message>
    <message>
        <source>Comment</source>
        <translation>Комментарий</translation>
    </message>
    <message>
        <source>A free comment which can spread out on several lines. </source>
        <translation>Произвольный комментарий, который может содержать несколько строк. </translation>
    </message>
    <message>
        <source>Timestamp</source>
        <translation>Временная метка</translation>
    </message>
    <message>
        <source>Date and time of generation of the video.</source>
        <translation>Дата и время создания видео.</translation>
    </message>
    <message>
        <source>Composer</source>
        <translation>Композитор</translation>
    </message>
    <message>
        <source>Contains the version of ffDiaporama with which the video was produced.</source>
        <translation>Содержит номер версии ffDiaporama в которой было создано видео.</translation>
    </message>
    <message>
        <source>Encoder</source>
        <translation>Кодировщик</translation>
    </message>
    <message>
        <source>Contains the version of libavformat (ffmpeg) with which the video was produced.</source>
        <translation>Содержит номер версии libavformat (ffmpeg) в которой было создано видео.</translation>
    </message>
    <message>
        <source>Chapters</source>
        <translation>Главы</translation>
    </message>
    <message>
        <source>The following fields appear: </source>
        <translation>Появляются следующие поля: </translation>
    </message>
    <message>
        <source>Chapter number</source>
        <translation>Номер главы</translation>
    </message>
    <message>
        <source>Slide</source>
        <translation>Слайд</translation>
    </message>
    <message>
        <source>Slide number in wich chapter is defined</source>
        <translation>Номер слайда в котором определена глава</translation>
    </message>
    <message>
        <source>Chapter title</source>
        <translation>Название главы</translation>
    </message>
    <message>
        <source>Start</source>
        <translation>Начало</translation>
    </message>
    <message>
        <source>Chapter start position</source>
        <translation>Позиция начала главы</translation>
    </message>
    <message>
        <source>End</source>
        <translation>Конец</translation>
    </message>
    <message>
        <source>Chapter end position</source>
        <translation>Позиция окончания главы</translation>
    </message>
    <message>
        <source>Duration</source>
        <translation>Продолжительность</translation>
    </message>
    <message>
        <source>Chapter duration</source>
        <translation>Продолжительность главы</translation>
    </message>
    <message>
        <source>Format</source>
        <translation>Формат</translation>
    </message>
    <message>
        <source>3GP/MP4/MKV</source>
        <translation>3GP/MP4/MKV</translation>
    </message>
    <message>
        <source>Full support</source>
        <translation>Полная поддержка</translation>
    </message>
    <message>
        <source>AVI/MPG/FLV/OGV/WEBM</source>
        <translation>AVI/MPG/FLV/OGV/WEBM</translation>
    </message>
    <message>
        <source>No support</source>
        <translation>Не поддерживаются</translation>
    </message>
    <message>
        <source>Options for speed waves</source>
        <translation>Настройки скорости</translation>
    </message>
    <message>
        <source>Transition</source>
        <translation>Переход</translation>
    </message>
    <message>
        <source>Defined default speed curve for transitions</source>
        <translation>Определяет скорость переходов по умолчанию</translation>
    </message>
    <message>
        <source>Block animations</source>
        <translation>Анимация блока</translation>
    </message>
    <message>
        <source>Defined default speed curve for block animations</source>
        <translation>Определяет скорость анимации блоков по умолчанию</translation>
    </message>
    <message>
        <source>Image animations</source>
        <translation>Анимация изображения</translation>
    </message>
    <message>
        <source>Defined default speed curve for image animations</source>
        <translation>Определяет скорость анимации изображений по умолчанию</translation>
    </message>
    <message>
        <source>See also</source>
        <translation>Смотрите также</translation>
    </message>
    <message>
        <source>TAG in ffmpeg</source>
        <translation>Тег в ffmpeg</translation>
    </message>
    <message>
        <source>Standard ID3v2</source>
        <translation>Стандарт ID3v2</translation>
    </message>
    <message>
        <source>Standard MPEG-7 on the descriptors of multimedia contents</source>
        <translation>Стандарт MPEG-7 описания мультимедиа контента</translation>
    </message>
    <message>
        <source>The properties of the project are a partial implementation of the </source>
        <translation>Свойства проекта - это частичная реализация </translation>
    </message>
    <message>
        <source>MPEG-7</source>
        <translation>MPEG-7</translation>
    </message>
    <message>
        <source> standard on the descriptors of multimedia contents.</source>
        <translation>стандарта описания мультимедиа контента.</translation>
    </message>
    <message>
        <source>These properties are written into the video files during the rendering and can be exploited by indexing systems (collection managers) or by </source>
        <translation>Эти свойства записываются в видео файлы в процессе их создания и могут использоваться системами индексирования (менеджерами коллекций) или </translation>
    </message>
    <message>
        <source>Media Center Systems</source>
        <translation>мультимедиа системы</translation>
    </message>
    <message>
        <source>Remark:</source>
        <translation>Примечание:</translation>
    </message>
    <message>
        <source>This field is only editable when the dialog box is used for creating a new project. Subsequently, it is not possible to change this value.</source>
        <translation>Это поле может редактироваться только когда открывается диалоговое окно для создания нового проекта. Впоследствии невозможно изменить это значение.</translation>
    </message>
    <message>
        <source>The title of the project </source>
        <translation>Название проекта </translation>
    </message>
    <message>
        <source>If the id3v2 compatibility option is set in &lt;a href=&quot;0101.html&quot;&gt;option dialog&lt;/a&gt;, this fields is limited to 30 characters</source>
        <translation>Если в диалоговом окне &lt;a href=&quot;0101.html&quot;&gt;Настроек программы&lt;/a&gt; установлена совместимость с id3v2, то эти поля ограничены 30 символами</translation>
    </message>
    <message>
        <source>Event date</source>
        <translation>Дата</translation>
    </message>
    <message>
        <source>The date of the event of the project</source>
        <translation>Дата события проекта</translation>
    </message>
    <message>
        <source>Override date</source>
        <translation>Замещающая дата</translation>
    </message>
    <message>
        <source>Check this box to override the date and offer you to enter the date as a free multi-line text</source>
        <translation>Установите этот флажок, чтобы изменить дату и ввести ее в произвольном формате (в виде свободного многострочного текста)</translation>
    </message>
    <message>
        <source>The name of the author of the project. </source>
        <translation>Имя автора проекта. </translation>
    </message>
    <message>
        <source>This field is often shown by indexing system and </source>
        <translation>Это поле часто отображается системами индексирования и </translation>
    </message>
    <message>
        <source> under the term Artist.</source>
        <translation> как Артист.</translation>
    </message>
    <message>
        <source>The album of the project </source>
        <translation>Альбом проекта </translation>
    </message>
    <message>
        <source>The language of the audio track </source>
        <translation>Язык аудио дорожки </translation>
    </message>
    <message>
        <source>(ISO 639 standard - 3 characters)</source>
        <translation>(код языка по ISO 639 - 3 знака)</translation>
    </message>
    <message>
        <source>Numerous indexing systems or </source>
        <translation>Многочисленные системы индексирования или </translation>
    </message>
    <message>
        <source> will read only the 1&lt;SUP&gt;st&lt;/SUP&gt; line.</source>
        <translation>могут прочитать только 1&lt;SUP&gt;ую&lt;/SUP&gt; строку.</translation>
    </message>
    <message>
        <source>For more compatibility with indexing systems and </source>
        <translation>Для обеспечения большей совместимости с системами индексирования и </translation>
    </message>
    <message>
        <source>, ffDiaporama does not include the whole video TAGs but is closer rather to the standard id3v2 than is the most used by these systems today. Furthermore, the video formats do not support every TAG in the same way.</source>
        <translation>, ffDiaporama включает не все видео теги стандарта id3v2, а наиболее широко используемые в этих системах. Кроме того, видео форматы не поддерживают все теги таким же образом.</translation>
    </message>
    <message>
        <source> Chapters defined in the project are listed for consultation. (To modify chapters use Chapter button in &lt;a href=&quot;0119.html&quot;&gt;modify slide dialog&lt;/a&gt;.) </source>
        <translation>Главы, определенные в проекте, представлены для справки. (Для изменения глав используйте кнопку Информация о главе в диалоговом окне &lt;a href=&quot;0119.html&quot;&gt;Параметры слайда&lt;/a&gt;.) </translation>
    </message>
    <message>
        <source>Remark: Video formats do not support all the chapters in the same way:</source>
        <translation>Примечание: видео форматы не поддерживают все главы в следующих случаях:</translation>
    </message>
    <message>
        <source>Thumbnail</source>
        <translation>Обложка</translation>
    </message>
    <message>
        <source>Create a new model from this thumbnail or edit custom thumbnail. Opens the &lt;a href=&quot;0117.html&quot;&gt;Edit thumbnail dialog&lt;/a&gt;.</source>
        <translation>Создать новый шаблон для этой обложки или отредактировать существующий. Открывает диалоговое окно &lt;a href=&quot;0117.html&quot;&gt;Изменить шаблон обложки&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>Customize the thumbnail only for this project (without creating a new thumbnail model). Opens the &lt;a href=&quot;0117.html&quot;&gt;Edit thumbnail dialog&lt;/a&gt;.</source>
        <translation>Изменить обложку только для этого проекта (без создания нового шаблона обложки). Открывает диалоговое окно &lt;a href=&quot;0117.html&quot;&gt;Изменить шаблон обложки&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>Expor thumbnail to a jpeg file. By default, the proposed file name is &quot;folder.jpg&quot;. ffDiaporama and many </source>
        <translation>Экспорт обложки в jpeg файл. По умолчанию предлагается имя файла &quot;folder.jpg&quot;. ffDiaporama и многие </translation>
    </message>
    <message>
        <source> recognize this file as the icon to be used for the directory that contains it.</source>
        <translation> определяют этот файл как значок, который будет использоваться для каталога, в котором он содержится.</translation>
    </message>
    <message>
        <source>ISO 639</source>
        <translation>ISO 639</translation>
    </message>
    <message>
        <source> This dialog allows you to define the information which qualifies the project. </source>
        <translation> Это диалоговое окно позволяет определить информацию, которая характеризует проект.</translation>
    </message>
    <message>
        <source>These options allow you to define the thumbnail that will be attached to the video file when rendering </source>
        <translation>Эти параметры позволяют определить обложку, которая будет прикреплена к создаваемому видео файлу </translation>
    </message>
    <message>
        <source>Event location</source>
        <translation>Местоположение события</translation>
    </message>
    <message>
        <source>The location where the project&apos;s event took place</source>
        <translation>Место, где произошло событие проекта</translation>
    </message>
    <message>
        <source>Click on this </source>
        <translation>Нажмите на </translation>
    </message>
    <message>
        <source> button to select a location from the &lt;a href=&quot;0123.html&quot;&gt;Add or modify a location&lt;/a&gt; dialog or using a favorite</source>
        <translation> кнопку для выбора местоположения из диалогового окна &lt;a href=&quot;0123.html&quot;&gt;Добавить или изменить местоположение&lt;/a&gt; или Избранного</translation>
    </message>
    <message>
        <source> button to remove actual location (set to empty)</source>
        <translation> кнопку для удаления текущего местоположения (очистить)</translation>
    </message>
    <message>
        <source>These options sets the value of the velocity curves for use whenever the corresponding options are set to &quot;Project Default&quot; </source>
        <translation>Эта параметры устанавливают значение скорости при выборе значения &quot;По умолчанию&quot; </translation>
    </message>
</context>
<context>
    <name>0109</name>
    <message>
        <source>Select files</source>
        <translation>Выбор файлов</translation>
    </message>
    <message>
        <source>This dialog box is used in very many cases in the application.</source>
        <translation>Это диалоговое окно очень часто используется в приложении.</translation>
    </message>
    <message>
        <source>It is used to select either one or multiple files depending on the purpose for which is was called.</source>
        <translation>Оно используется для выбора одного или несколько файлов в зависимости от цели, для которой оно вызвано.</translation>
    </message>
    <message>
        <source>It consists of a multimedia file browser.</source>
        <translation>Оно представляет собой Мультимедиа Проводник.</translation>
    </message>
    <message>
        <source>For more information on the ffDiaporama&apos;s multimedia file browser, see: &lt;a href=&quot;0024.html&quot;&gt;The multimedia file browser&lt;/a&gt;</source>
        <translation>Для получения дополнительной информации о Мультимедиа Проводнике смотрите: &lt;a href=&quot;0024.html&quot;&gt;Мультимедиа Проводник&lt;/a&gt;</translation>
    </message>
</context>
<context>
    <name>0110</name>
    <message>
        <source>Correct, reframe or cut image or video</source>
        <translation>Коррекция, кадрирование или обрезка изображения или видео</translation>
    </message>
    <message>
        <source>Allows to select a framing from a list of predefined framings. The framings are classified in different categories: </source>
        <translation>Позволяет выбрать тип кадрирования из предопределенного списка. Кадрирование подразделяется на следующие категории: </translation>
    </message>
    <message>
        <source>Lock on the project geometry</source>
        <translation>Блокировка геометрии проекта</translation>
    </message>
    <message>
        <source>Lock the image framing selection rectangle to the same geometry as the project. If you place the image in full screen, the reframed part will correspond to the whole screen.</source>
        <translation>Означает, что прямоугольник выделения при кадрировании изображения будет той же геометрии, что и сам проект. Если вы откроете изображение в полноэкранном режиме, то выбранная часть будет соответствовать всему экрану.</translation>
    </message>
    <message>
        <source>Lock on the image geometry</source>
        <translation>Блокировка геометрии изображения</translation>
    </message>
    <message>
        <source>Lock the image framing selection rectangle to the same geometry as the image</source>
        <translation>Означает, что прямоугольник выделения при кадрировании изображения будет той же геометрии, что и изображение</translation>
    </message>
    <message>
        <source>No constraint</source>
        <translation>Без ограничений</translation>
    </message>
    <message>
        <source>No constraint is applied to the image framing selection rectangle.</source>
        <translation>Означает, что к прямоугольнику выделения при кадрировании изображения не применяются ограничения.</translation>
    </message>
    <message>
        <source>Lock on this geometry</source>
        <translation>Блокировка геометрии</translation>
    </message>
    <message>
        <source>Lock image framing selection rectangle to the actual geometry. This only has meaning when a shape has been defined in &quot;no constraint&quot; mode.</source>
        <translation>Означает, что прямоугольник выделения при кадрировании изображения будет той же геометрии, что и в настоящее время. Это имеет смысл только когда форма была определена в режиме &quot;без ограничений&quot;.</translation>
    </message>
    <message>
        <source>According to the image format, various choices will be proposed to you. For example: </source>
        <translation>В соответствии с форматом изображения, вам будут доступны различные варианты. Например: </translation>
    </message>
    <message>
        <source>The horizontal position from the left (X). This position is expressed as a percentage (%) of the width of the image.</source>
        <translation>Горизонтальное положение от левого края (X). Это положение, выраженное в процентах (%) от ширины изображения.</translation>
    </message>
    <message>
        <source>The vertical position from the top of the image ( Y ). This position is expressed as a percentage (%) of the height of the image.</source>
        <translation>Вертикальное положение от верхнего края (Y). Это положение, выраженное в процентах (%) от высоты изображения.</translation>
    </message>
    <message>
        <source>The width. This value is expressed as a percentage (%) of the original width of the image.</source>
        <translation>Ширина. Это значение, выраженное в процентах (%) от исходной ширины изображения.</translation>
    </message>
    <message>
        <source>The height. This value is expressed as a percentage (%) of the original height of the image.</source>
        <translation>Высота. Это значение, выраженное в процентах (%) от исходной высоты изображения.</translation>
    </message>
    <message>
        <source>Remarks:</source>
        <translation>Примечания:</translation>
    </message>
    <message>
        <source>With the mouse</source>
        <translation>С помощью мыши</translation>
    </message>
    <message>
        <source>Click one of the handles and, with the mouse button down, drag the mouse to modify the size (to increase or reduce the part of the image to be kept). </source>
        <translation>Выберите один из маркеров и, зажав кнопку мыши, перетащите, чтобы изменить размер (для увеличения или уменьшения части изображения, которая будет сохранена). </translation>
    </message>
    <message>
        <source>Click the image and, with the mouse button down, drag the mouse to modify the part of the image which will be kept.</source>
        <translation>Нажмите на изображение и зажав кнопку перетащите, чтобы изменить часть изображения, которая будет сохранена.</translation>
    </message>
    <message>
        <source>With the keyboard</source>
        <translation>С помощью клавиатуры</translation>
    </message>
    <message>
        <source>Use the arrows to move the part of the image which will be kept. </source>
        <translation>Используйте стрелки, чтобы переместить часть изображения, которая будет сохранена.</translation>
    </message>
    <message>
        <source>Use SHIFT+arrows to move the upper left corner handle or CTRL+arraows to move the lower right corner handle, to change the size of the part of the image which will be kept.</source>
        <translation>Воспользуйтесь сочетанием клавиш SHIFT + стрелки для перемещения к верхнему левому углу или CTRL + стрелки для перемещения к нижнему правому углу, чтобы изменить размер части изображения, которая будет сохранена.</translation>
    </message>
    <message>
        <source>When the image does not correspond to the geometry of the video to be produced, transparent zones appear. For example: an 4:3 image used in a 16:9 project will be shown by default with a transparent zone on each side.</source>
        <translation>Если изображение не соответствует геометрии видео, появляются прозрачные зоны.
Например: изображение 4:3, используемое в проекте 16:9, будет показано по умолчанию в прозрачной зоне на каждой стороне.</translation>
    </message>
    <message>
        <source>Allows you to increase or decrease the luminosity of the image</source>
        <translation>Позволяет увеличить или уменьшить яркость изображения</translation>
    </message>
    <message>
        <source>Allows you to increase or decrease the contrast of the image</source>
        <translation>Позволяет увеличить или уменьшить контрастность изображения</translation>
    </message>
    <message>
        <source>Allows you to to increase or decrease the gamma value of the image</source>
        <translation>Позволяет увеличить или уменьшить значение гаммы изображения</translation>
    </message>
    <message>
        <source>Allows you to modify the colorization of an image by changing the primary color red. Example : Reducing the red component makes the image more yellow - increasing it makes make the image more red</source>
        <translation>Позволяет изменять цветность изображения, регулируя красный цвет. Например: уменьшение красного канала делает изображение более желтым, увеличение - делает изображение более красным</translation>
    </message>
    <message>
        <source>Allows you to modify the colorization of an image by changing the primary color green. Example : Reducing the green component makes the image more red - increasing it makes the image more green</source>
        <translation>Позволяет изменять цветность изображения, регулируя зеленый цвет. Например: уменьшение зеленого канала делает изображение более красным, увеличение - делает изображение более зеленым</translation>
    </message>
    <message>
        <source>Allows you to modify the colorization of an image by changing the primary color blue. Example : Reducing the green component makes the image more red - increasing it makes the image more blue</source>
        <translation>Позволяет изменять цветность изображения, регулируя синий цвет. Например: уменьшение синего канала делает изображение более красным, увеличение - делает изображение более синим</translation>
    </message>
    <message>
        <source> This button allows the value to be reset to zero for all correction settings.</source>
        <translation> Эта кнопка позволяет сбросить все настройки коррекции изображения на ноль.</translation>
    </message>
    <message>
        <source>Increase the blur with a negative value, using radius.</source>
        <translation>Отрицательные значения увеличивают размытие.</translation>
    </message>
    <message>
        <source>Increase the sharpen with a positive value, using radius.</source>
        <translation>Положительные значения увеличивают резкость.</translation>
    </message>
    <message>
        <source>The progress bar</source>
        <translation>Прогресс бар</translation>
    </message>
    <message>
        <source>The working range</source>
        <translation>Рабочий диапазон</translation>
    </message>
    <message>
        <source> Positions the cursor at the starting point</source>
        <translation>Переместить курсор в начало</translation>
    </message>
    <message>
        <source> Uses the current cursor position as starting point (carries out an edit)</source>
        <translation>Использовать текущую позицию как стартовую (происходит редактирование - обрезка видео)</translation>
    </message>
    <message>
        <source> Positions the cursor at the end point</source>
        <translation>Переместить курсор в конец</translation>
    </message>
    <message>
        <source> Uses the current cursor position as end point (carries out an edit)</source>
        <translation>Использовать текущую позицию как конечную (происходит редактирование - обрезка видео)</translation>
    </message>
    <message>
        <source>The additional settings zone</source>
        <translation>Зона дополнительных настроек</translation>
    </message>
    <message>
        <source>&lt;B&gt;Volume&lt;/B&gt; allows you to define the &quot;Master Volume&quot; for the file</source>
        <translation>&lt;B&gt;Громкость&lt;/B&gt; позволяет определить громкость фильма</translation>
    </message>
    <message>
        <source>&lt;B&gt;Deinterlace video&lt;/B&gt; allows you to activate the deinterlace filter</source>
        <translation>&lt;B&gt;Устранение чересстрочности видео&lt;/B&gt; позволяет активировать фильтр устранения чересстрочности видео (деинтерлейсинга)</translation>
    </message>
    <message>
        <source>See also</source>
        <translation>Смотрите также</translation>
    </message>
    <message>
        <source>Ken Burns effects</source>
        <translation>Ken Burns эффекты</translation>
    </message>
    <message>
        <source>Filter: Histogram equalization</source>
        <translation>Фильтр: выравнивание гистограммы</translation>
    </message>
    <message>
        <source>Filter: Noise reduction</source>
        <translation>Фильтр: подавление шумов</translation>
    </message>
    <message>
        <source>You can use the + and - buttons in each input field to change the settings, or directly enter values for the four parameters.</source>
        <translation>Вы можете использовать кнопки + и - в каждом поле ввода, чтобы изменить настройки или непосредственно ввести значения всех четырех параметров.</translation>
    </message>
    <message>
        <source>Example: if X=25% then the 1st quarter to the left of the image is eliminated.</source>
        <translation>Например: если Х = 25 %, то левая четверть изображения будет обрезана.</translation>
    </message>
    <message>
        <source>Example: if Y=25% the 1st quarter at the top of the image is eliminated.</source>
        <translation>Например: если Y = 25 %, то верхняя четверть изображения будет обрезана.</translation>
    </message>
    <message>
        <source>Example: if Width=33%, the re-framed image will represent 1/3 of the original.</source>
        <translation>Например: если ширина = 33 %, кадрированное изображение составит 1/3 оригинала.</translation>
    </message>
    <message>
        <source>Example: if Height=33%, the re-framed image will represent 1/3 of the original.</source>
        <translation>Например: если высота = 33 %, кадрированное изображение составит 1/3 оригинала.</translation>
    </message>
    <message>
        <source> This button allows you to change the file </source>
        <translation> Эта кнопка позволяет изменить файл </translation>
    </message>
    <message>
        <source>Warning! If you replace a file (image or video) with another one with a different image geometry, you will need to review the image framing in all shots. </source>
        <translation>Внимание! Если необходимо заменить файл (изображение или видео) на другой с иной геометрией изображения, то нужно изменить параметры кадрирования изображения на всех кадрах.</translation>
    </message>
    <message>
        <source>Blur/Sharpen </source>
        <translation>Размытие/Резкость </translation>
    </message>
    <message>
        <source> This button allows you to reset the value to zero. (For some transformation settings.)</source>
        <translation> Эта кнопка позволяет сбросить все значения на ноль. (Для некоторых параметров преобразования.)</translation>
    </message>
    <message>
        <source> This button starts playback. Click again on this button to pause. </source>
        <translation>Эта кнопка запускает воспроизведение. Повторное нажатие ставит на паузу.</translation>
    </message>
    <message>
        <source>This dialog box allows you to:</source>
        <translation>Это диалоговое окно позволяет:</translation>
    </message>
    <message>
        <source>Change image framing (select a part of the image).</source>
        <translation>Кадрировать изображение (выбрать часть изображения).</translation>
    </message>
    <message>
        <source>Rotate image (change or restore the orientation portrait/landscape).</source>
        <translation>Повернуть изображение (изменить или восстановить портретную/ландшафтную ориентацию).</translation>
    </message>
    <message>
        <source>Correct image (change the color and/or exposure parameters) but also applying graphical filters.</source>
        <translation>Изменить изображение (цвет и/или экспозицию), а также применить графические фильтры.</translation>
    </message>
    <message>
        <source>Define the beginning and end of a video sequence.</source>
        <translation>Определение начала и конца видео.</translation>
    </message>
    <message>
        <source> The image correct and reframe tag</source>
        <translation>Вкладка коррекция и кадрирование изображения</translation>
    </message>
    <message>
        <source>This tab is available for both images and video. It is divided into two parts:</source>
        <translation>Эта вкладка доступна как для изображений, так и для видео. Она разделена на две части:</translation>
    </message>
    <message>
        <source>To the left: The interactive area</source>
        <translation>Слева: интерактивная зона</translation>
    </message>
    <message>
        <source>To the right: The settings area</source>
        <translation>Справа: зона настроек</translation>
    </message>
    <message>
        <source>At the bottom of the interactive zone, is an area for changing the image or video file:</source>
        <translation>В нижней части интерактивной зоны находится область изменения файла изображения или видео:</translation>
    </message>
    <message>
        <source>At the bottom of the dialog box:</source>
        <translation>В нижней части диалогового окна:</translation>
    </message>
    <message>
        <source> This button enables or disables the magnetic rulers: When rulers are enabled, the mouse will automatically snap to the edges of the photo, facilitating the framing. </source>
        <translation>Эта кнопка включает или отключает магнитные линейки: когда они включены, мышь будет автоматически притягиваться к краям фотографии, содействуя выравниванию.</translation>
    </message>
    <message>
        <source>The interactive area</source>
        <translation>Интерактивная зона</translation>
    </message>
    <message>
        <source>You can use the interactive zone to set the framing with the mouse or the keyboard:</source>
        <translation>Вы можете использовать интерактивную зону для кадрирования с помощью мыши или клавиатуры:</translation>
    </message>
    <message>
        <source>The settings area - Framing and form</source>
        <translation>Зона настроек - Кадрирование и форма</translation>
    </message>
    <message>
        <source>Shape</source>
        <translation>Форма</translation>
    </message>
    <message>
        <source>Select a shape for the current block.</source>
        <translation>Выберите форму текущего блока.</translation>
    </message>
    <message>
        <source>The settings area - Annimation settings</source>
        <translation>Зона настроек - Настройки анимации</translation>
    </message>
    <message>
        <source>Speed wave</source>
        <translation>Скорость</translation>
    </message>
    <message>
        <source>Defined speed curve for image animations.</source>
        <translation>Определить скорость анимации изображений.</translation>
    </message>
    <message>
        <source>The settings area - Image rotation</source>
        <translation>Зона настроек - Поворот изображения</translation>
    </message>
    <message>
        <source>The settings area - Luminosity, contrast and gamma and Color enhancement</source>
        <translation>Зона настроек - Яркость, контрастность и гамма</translation>
    </message>
    <message>
        <source>Allows you to activate the grayscale (black &amp; white) filter.</source>
        <translation>Позволяет активировать фильтр Оттенки серого (черно-белый).</translation>
    </message>
    <message>
        <source>Allows you to activate the equalize (Histogram equalization) filter.</source>
        <translation>Позволяет активировать фильтр выравнивания (выравнивание гистограммы).</translation>
    </message>
    <message>
        <source>All the combinations are possible. For example: you can increase the red and reduce the green at the same time. The results depend on the initial strength of the primary color components of the source image.</source>
        <translation>Возможны любые комбинации. Например: вы можете увеличить красный и уменьшить зеленый одновременно. Результаты зависят от первоначальной насыщенности основных цветов исходного изображения.</translation>
    </message>
    <message>
        <source>The settings area - Image enhancement</source>
        <translation>Зона настроек - Улучшение изображения</translation>
    </message>
    <message>
        <source> Apply a filter to the photo or video images. The following filters are available: </source>
        <translation>Применить фильтр к фото или видео. Доступны следующие фильтры: </translation>
    </message>
    <message>
        <source>Type: Select the blur/sharpen algorythm</source>
        <translation>Тип: выберите алгоритм размытия/резкости</translation>
    </message>
    <message>
        <source>Allows you to activate the despeckle (Noise reduction) filter.</source>
        <translation>Позволяет активировать фильтр Удаление пятен (подавление шумов).</translation>
    </message>
    <message>
        <source>Allows you to activate the antialias (minimizing the distortion artifacts) filter.</source>
        <translation>Позволяет активировать фильтр сглаживания (сведение к минимуму артефактов искажения).</translation>
    </message>
    <message>
        <source>The settings area - Artistic effects</source>
        <translation>Зона настроек - Художественные эффекты</translation>
    </message>
    <message>
        <source>Allows you to activate the negative filter..</source>
        <translation>Позволяет активировать эффект негатива.</translation>
    </message>
    <message>
        <source>Allows you to activate the emboss filter.</source>
        <translation>Позволяет активировать эффект тиснения.</translation>
    </message>
    <message>
        <source>Allows you to activate the edge filter.</source>
        <translation>Позволяет активировать эффект контура.</translation>
    </message>
    <message>
        <source>Allows you to activate the charcoal filter.</source>
        <translation>Позволяет активировать эффект рисунка углем.</translation>
    </message>
    <message>
        <source>Allows you to activate the oilpaint filter.</source>
        <translation>Позволяет активировать эффект рисунка маслом.</translation>
    </message>
    <message>
        <source>The settings area - Image distortion</source>
        <translation>Зона настроек -  Искажение изображения</translation>
    </message>
    <message>
        <source>Allows you to activate the swirl transformation. Image swirling is a non-linear image deformation that creates a whirlpool effect.</source>
        <translation>Позволяет активировать трансформацию кручения. Скручивание изображение - это нелинейная деформация, которая создает эффект водоворота.</translation>
    </message>
    <message>
        <source>Allows you to activate the implode transformation</source>
        <translation>Позволяет активировать трансформацию имплозии (взрыв, направленный внутрь)</translation>
    </message>
    <message>
        <source>A value of 0 disables the filter.</source>
        <translation>Значение 0 отключает фильтр.</translation>
    </message>
    <message>
        <source>A negative or positive value active the filter in one direction or the other.</source>
        <translation>Отрицательное или положительное значение активирует фильтр в разных направлениях.</translation>
    </message>
    <message>
        <source> This button allows the value to be reset to zero.</source>
        <translation> Эта кнопка позволяет сбросить значение на ноль.</translation>
    </message>
    <message>
        <source> The video tag</source>
        <translation>Вкладка Видео</translation>
    </message>
    <message>
        <source>This tag is available only for video.</source>
        <translation>Эта вкладка доступна только для видео.</translation>
    </message>
    <message>
        <source>Define a Google Maps map.</source>
        <translation>Выбрать карту Google Maps.</translation>
    </message>
    <message>
        <source> The Google Maps Map tag</source>
        <translation>Вкладка карт Google Maps</translation>
    </message>
    <message>
        <source>This tag is available only for Google Maps map.</source>
        <translation>Эта вкладка доступна только для карт Google Maps.</translation>
    </message>
    <message>
        <source>this dialog box is organized in tab that are available depending on the type of the object to edit.</source>
        <translation>Это диалоговое окно содержит вкладки, которые доступны в зависимости от типа редактируемого объекта.</translation>
    </message>
    <message>
        <source>&lt;a href=&quot;#IMAGETAG&quot;&gt;The image correct and reframe tag&lt;/a&gt; is available with all object types</source>
        <translation>&lt;a href=&quot;#IMAGETAG&quot;&gt;Вкладка коррекция и кадрирование изображения &lt;/a&gt; доступна для всех типов объектов</translation>
    </message>
    <message>
        <source>&lt;a href=&quot;#VIDEOTAG&quot;&gt;The video tag&lt;/a&gt; is available only with video object</source>
        <translation>&lt;a href=&quot;#VIDEOTAG&quot;&gt;Вкладка Видео &lt;/a&gt; доступна только для видео</translation>
    </message>
    <message>
        <source>For more information on available types of objects see: &lt;a href=&quot;0045.html&quot;&gt;Types of objects in ffDiaporama&lt;/a&gt;</source>
        <translation>Для получения информации о поддерживаемых типах объектов смотрите: &lt;a href=&quot;0045.html&quot;&gt;Типы объектов в ffDiaporama&lt;/a&gt;</translation>
    </message>
    <message>
        <source>&lt;a href=&quot;#GMAPSMAPTAG&quot;&gt;The Google Maps map tag&lt;/a&gt; is available only with Google Maps map object</source>
        <translation>&lt;a href=&quot;#GMAPSMAPTAG&quot;&gt;Вкладка карт Google Maps&lt;/a&gt; доступна только для карт Google Maps</translation>
    </message>
    <message>
        <source>On the upper left part, you define the map properties</source>
        <translation>В верхней левой части вы можете определить свойства карты</translation>
    </message>
    <message>
        <source>On the bottom left part, the map is displayed with markers</source>
        <translation>В нижней левой части отображается карта с маркерами</translation>
    </message>
    <message>
        <source>On the upper right part, the table of location is displayed</source>
        <translation>В верхней правой части отображается таблица местоположений</translation>
    </message>
    <message>
        <source>On the bottom right part, you define the properties of the selected location</source>
        <translation>В нижней правой части вы можете определите свойства выбранного местоположения</translation>
    </message>
    <message>
        <source>The map properties</source>
        <translation>Параметры карт</translation>
    </message>
    <message>
        <source>Map type</source>
        <translation>Тип карты</translation>
    </message>
    <message>
        <source>Define the type of the map. You can select between the four Google Maps possibilities:</source>
        <translation>Выберите тип карты. Вы можете выбратьодну из четырех возможных в Google Maps:</translation>
    </message>
    <message>
        <source>Roadmap</source>
        <translation>Дорожная карта</translation>
    </message>
    <message>
        <source>Satellite</source>
        <translation>Вид со спутника</translation>
    </message>
    <message>
        <source>Terrain</source>
        <translation>Географическая карта</translation>
    </message>
    <message>
        <source>Hybrid</source>
        <translation>Смешанная (спутник + дорожная)</translation>
    </message>
    <message>
        <source>Map size</source>
        <translation>Размер карты</translation>
    </message>
    <message>
        <source>Define the size of the map. This size represents the distance in width and height of the map.</source>
        <translation>Определите размер карты. Этот размер представляет расстояние :ширину и высоту карты.</translation>
    </message>
    <message>
        <source>Smaller the zoom is and huger the area represented by the map is.</source>
        <translation>Чем меньше масштаб, тем больше область, представленная на карте.</translation>
    </message>
    <message>
        <source>Higher the zoom is and smaller the area represented by the map is.</source>
        <translation>Чем больше масштаб, тем меньше область, представленная на карте.</translation>
    </message>
    <message>
        <source>Image size</source>
        <translation>Размер изображения</translation>
    </message>
    <message>
        <source>Define the size of the image generated for the map. ffDiaporama proposes to generate maps of several image sizes, so, to create a fluid zoom animation, you can use a large image.</source>
        <translation>Определите размер изображения, генерируемого для карты. ffDiaporama позволяет создавать карты нескольких размеров, поэтому для создания плавной анимации масштабирования вы можете использовать большое изображение.</translation>
    </message>
    <message>
        <source>The table of locations</source>
        <translation>Таблица местоположений</translation>
    </message>
    <message>
        <source>Select a location from the &lt;a href=&quot;0123.html&quot;&gt;Add or modify a location&lt;/a&gt; dialog or using a favorite.</source>
        <translation>Выбор местоположения из диалогового окна &lt;a href=&quot;0123.html&quot;&gt;Добавить или изменить местоположение&lt;/a&gt; или используя Избранное.</translation>
    </message>
    <message>
        <source>Edit current location. Open the &lt;a href=&quot;0123.html&quot;&gt;Add or modify a location&lt;/a&gt; dialog.</source>
        <translation>Изменить текущее местоположение. Откроется диалоговое окно &lt;a href=&quot;0123.html&quot;&gt;Добавить или изменить местоположение&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>Remove current location.</source>
        <translation>Удалить текущее местоположение.</translation>
    </message>
    <message>
        <source>The marker properties</source>
        <translation>Параметры маркера</translation>
    </message>
    <message>
        <source>Properties for all shots</source>
        <translation>Свойства для всех кадров</translation>
    </message>
    <message>
        <source>This settings group defines properties for all shots, so, the modifications made to the following properties will apply to all shots. To understand the differences between the properties which apply to all shots and those which apply only to the current shot, consult: &lt;a href=&quot;0010.html&quot;&gt;How ffDiaporama works&lt;/a&gt;.</source>
        <translation>Эта группа настроек определяет свойства для всех кадров, поэтому изменения, сделанные в следующих свойствах, будут применяться ко всем кадрам. Чтобы понять различия между свойствами, которые применяются ко всем кадрам, и свойствами, которые применяются только к текущему кадру,смотрите: &lt;a href=&quot;0010.html&quot;&gt;Принципы работы ffDiaporama&lt;/&gt;.</translation>
    </message>
    <message>
        <source>GPS Position form</source>
        <translation>Форма GPS позиции</translation>
    </message>
    <message>
        <source>Define a form for the GPS position</source>
        <translation>Выберите форму для отображения GPS позиции</translation>
    </message>
    <message>
        <source>Marker form</source>
        <translation>Форма маркера</translation>
    </message>
    <message>
        <source>Define a form for the marker</source>
        <translation>Выберите форму маркера</translation>
    </message>
    <message>
        <source>Composition</source>
        <translation>Содержимое</translation>
    </message>
    <message>
        <source>Defined what information will be displayed in the marker</source>
        <translation>Выберите информацию, отображаемую в маркере</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Размер</translation>
    </message>
    <message>
        <source>Define the size of the marker and the GPS position</source>
        <translation>Выберите размер маркера и GPS положения</translation>
    </message>
    <message>
        <source>Distance</source>
        <translation>Расстояние</translation>
    </message>
    <message>
        <source>Defined where to display the marker (the distance between the marker and the GPS position)</source>
        <translation>Выберите где показывать маркер (расстояние между маркером и GPS позицией)</translation>
    </message>
    <message>
        <source>Properties for this shot</source>
        <translation>Свойства этого кадра</translation>
    </message>
    <message>
        <source>This settings group defines properties for the current shot, so you can create animation of makers by defining different properties for each shots.</source>
        <translation>Эта группа настроек определяет свойства текущего кадра,поэтому вы можете создать анимацию маркера, определив разные свойства для каждого кадра.</translation>
    </message>
    <message>
        <source>Text color</source>
        <translation>Цвет текста</translation>
    </message>
    <message>
        <source>Defines the color of the text</source>
        <translation>Выберите цвет текста</translation>
    </message>
    <message>
        <source>Background color</source>
        <translation>Цвет фона</translation>
    </message>
    <message>
        <source>Defines the color of the background of the marker, of the GPS position and of the part between the two</source>
        <translation>Выберите цвет фона маркера, GPS позиции и части между ними</translation>
    </message>
    <message>
        <source>Line color</source>
        <translation>Цвет линий</translation>
    </message>
    <message>
        <source>Defines the color of the border</source>
        <translation>Выберите цвет границы</translation>
    </message>
    <message>
        <source>Visibility</source>
        <translation>Видимость</translation>
    </message>
    <message>
        <source>Defined if the marker is visible, half-visible (masked) or hidden</source>
        <translation>Выберите видимость маркера: видим, полувидим или скрыт</translation>
    </message>
    <message>
        <source>The rotation angle for the z axis. This position is expressed in degrees. Example: if Rotation=90°, the image is turned by a quarter to the right.</source>
        <translation>Угол поворота на оси z. Эта позиция выражается в градусах. Пример: если Вращение=90°, то изображение повернется на четверть вправо.</translation>
    </message>
    <message>
        <source>Turn the image to the left (to the nearest multiple of 90°).</source>
        <translation>Перевернуть изображение влево (до числа ближайшего к 90°).</translation>
    </message>
    <message>
        <source>Turn the image to the right (to the nearest multiple of 90°).</source>
        <translation>Перевернуть изображение вправо (до числа ближайшего к 90°).</translation>
    </message>
    <message>
        <source>You can move with the mouse the </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> handle, on the progress bar, to move the current position</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>You can move with the mouse the two </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> and </source>
        <translation type="unfinished"> и </translation>
    </message>
    <message>
        <source> handles, on the progress bar, to move the Start and End positions</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Displays as follows: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The ruler representing the duration of the video is dispayed under a black background. Remark than the length of the ruler is increased in proportion to the duration of the video.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The blue part, on wave form and ruler, represents the part of the video which is selected (which will be used in the assembly).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The wave form of the sound of the video is displayed under a white background.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>0111</name>
    <message>
        <source>File information</source>
        <translation>Информация о файле</translation>
    </message>
    <message>
        <source>Information shown for the image files</source>
        <translation>Информация, отображаемая для изображений</translation>
    </message>
    <message>
        <source>Information on file</source>
        <translation>Информация о файле</translation>
    </message>
    <message>
        <source>File name</source>
        <translation>Имя файла</translation>
    </message>
    <message>
        <source>The name of the file</source>
        <translation>Имя файла</translation>
    </message>
    <message>
        <source>File type</source>
        <translation>Тип файла</translation>
    </message>
    <message>
        <source>Image</source>
        <translation>Изображение</translation>
    </message>
    <message>
        <source>File size</source>
        <translation>Размер файла</translation>
    </message>
    <message>
        <source>The size of the file on the disk (Mb)</source>
        <translation>Размер файла на диске (Мб)</translation>
    </message>
    <message>
        <source>File created</source>
        <translation>Дата создания файла</translation>
    </message>
    <message>
        <source>The date and the hour of creation of the file on the disk (when you transferred it since the camera)</source>
        <translation>Дата и время создания файла на диске (когда вы перенесли его с камеры)</translation>
    </message>
    <message>
        <source>File modify</source>
        <translation>Дата изменения файла</translation>
    </message>
    <message>
        <source>The date and the hour of the last modification of the file (when the photo was taken or when you modified it with an image editor)</source>
        <translation>Дата и время последнего изменения файла (когда была сделана фотография или когда вы изменили ее редактором изображений)</translation>
    </message>
    <message>
        <source>Additional information</source>
        <translation>Дополнительная информация</translation>
    </message>
    <message>
        <source> Show the EXIF information supplied by the camera. </source>
        <translation>Отображается EXIF информация, предоставляемая камерой. </translation>
    </message>
    <message>
        <source>This zone can contain several hundreds of lines according to what the camera supplies. </source>
        <translation>Эта область может содержать несколько сотен значений в зависимости от камеры.</translation>
    </message>
    <message>
        <source>Information shown for the audio and video files</source>
        <translation>Информация, отображаемая для аудио и видео файлов</translation>
    </message>
    <message>
        <source>Information on file (audio and video files)</source>
        <translation>Информация о файле (аудио и видео файлы)</translation>
    </message>
    <message>
        <source>Audio track information (audio and video files)</source>
        <translation>Информация о аудио дорожке (аудио и видео файлы)</translation>
    </message>
    <message>
        <source> This zone contains a table listing every audio track present in the file. </source>
        <translation>Эта область содержит список аудио дорожек в файле. </translation>
    </message>
    <message>
        <source>For every track, the following information is shown: </source>
        <translation>Для каждой из них отображается следующая информация:</translation>
    </message>
    <message>
        <source>Track number</source>
        <translation>Номер дорожки</translation>
    </message>
    <message>
        <source>Language</source>
        <translation>Язык</translation>
    </message>
    <message>
        <source>The language in which is the audio track (generally cameras and camcorders indicate &lt;B&gt;und&lt;/B&gt; for undefine)</source>
        <translation>Язык аудио дорожки (как правило, фотоаппараты и камеры указывают &lt;B&gt;und&lt;/B&gt; (не определено))</translation>
    </message>
    <message>
        <source>Codec</source>
        <translation>Кодек</translation>
    </message>
    <message>
        <source>The audio codec used for compressed the sound</source>
        <translation>Аудио кодек, используемый для сжатия звука</translation>
    </message>
    <message>
        <source>Channels</source>
        <translation>Каналы</translation>
    </message>
    <message>
        <source>The number of audio channels (1=mono, 2=stereo, etc.)</source>
        <translation>Количество звуковых каналов (1 = моно, 2 = стерео и т.д.)</translation>
    </message>
    <message>
        <source>Bitrate</source>
        <translation>Битрейт</translation>
    </message>
    <message>
        <source>The audio compression ratio (when available)</source>
        <translation>Степень сжатия звука (при наличии)</translation>
    </message>
    <message>
        <source>Frequency</source>
        <translation>Частота кадров</translation>
    </message>
    <message>
        <source>The frequency of sampling used by the audio track</source>
        <translation>Частота дискретизации аудио дорожки</translation>
    </message>
    <message>
        <source>Title</source>
        <translation>Название</translation>
    </message>
    <message>
        <source>A title (when available)</source>
        <translation>Название (при наличии)</translation>
    </message>
    <message>
        <source>Video track information (video files only)</source>
        <translation>Информация о видео дорожке (только видеофайлы)</translation>
    </message>
    <message>
        <source> This zone contains a board listing every video track present in the file. </source>
        <translation>Эта область содержит список видео дорожек в файле. </translation>
    </message>
    <message>
        <source>Image size</source>
        <translation>Размер изображения</translation>
    </message>
    <message>
        <source>The size of the images of the video track in number of points by number of line</source>
        <translation>Размер изображения видео дорожки (количество точек на количество строк)</translation>
    </message>
    <message>
        <source>Image format</source>
        <translation>Формат изображения</translation>
    </message>
    <message>
        <source>The size of the images of the video track in million of pixels</source>
        <translation>Размер изображения видео дорожки (в мегапикселях)</translation>
    </message>
    <message>
        <source>Image geometry</source>
        <translation>Геометрия изображения</translation>
    </message>
    <message>
        <source>The image geometry of the video track (4:3, 16:9, etc.)</source>
        <translation>Геометрия видео дорожки (4:3, 16:9, и др.)</translation>
    </message>
    <message>
        <source>The video codec used for compressed the images</source>
        <translation>Видео кодек, используемый для сжатия изображения</translation>
    </message>
    <message>
        <source>Frame rate</source>
        <translation>Частота кадров</translation>
    </message>
    <message>
        <source>The number of images per second of the video</source>
        <translation>Количество кадров в секунду</translation>
    </message>
    <message>
        <source>The video compression ratio (when available)</source>
        <translation>Степень сжатия видео (при наличии)</translation>
    </message>
    <message>
        <source>Chapter information (video files only)</source>
        <translation>Информация о главах (только видеофайлы)</translation>
    </message>
    <message>
        <source> This zone appears only for files containing chapters. it contains a table listing every chapter present in the file. </source>
        <translation>Эта область появляется только для файлов, содержащих главы. Она содержит список глав, присутствующих в файле.</translation>
    </message>
    <message>
        <source>For every chapter, the following information is shown: </source>
        <translation>Для каждой из них отображается следующая информация: </translation>
    </message>
    <message>
        <source>Chapter number</source>
        <translation>Номер главы</translation>
    </message>
    <message>
        <source>The title of the chapter</source>
        <translation>Название главы</translation>
    </message>
    <message>
        <source>Start</source>
        <translation>Начало</translation>
    </message>
    <message>
        <source>The temporal position of the beginning of the chapter</source>
        <translation>Временное положение начала главы</translation>
    </message>
    <message>
        <source>End</source>
        <translation>Конец</translation>
    </message>
    <message>
        <source>The temporal position of the end of the chapter</source>
        <translation>Временное положение окончания главы</translation>
    </message>
    <message>
        <source>Duration</source>
        <translation>Продолжительность</translation>
    </message>
    <message>
        <source>The duration of the chapter</source>
        <translation>Продолжительность главы</translation>
    </message>
    <message>
        <source>Additional information (video files only)</source>
        <translation>Дополнительная информация (только видеофайлы)</translation>
    </message>
    <message>
        <source> This zone contains diverse information on the video. </source>
        <translation>Эта область содержит разнообразную информацию о видео.</translation>
    </message>
    <message>
        <source>At least the information about the duration of the video will be shown, but a lot of other information can appear according to what is available in the file, such as: </source>
        <translation>По меньшей мере будет показана информация о продолжительности видео, а также может содержать много другой информации в зависимости от того, что есть в файле:</translation>
    </message>
    <message>
        <source>creation_time</source>
        <translation>Время создания</translation>
    </message>
    <message>
        <source>Date and time of creation of the video</source>
        <translation>Дата и время создания видео</translation>
    </message>
    <message>
        <source>title</source>
        <translation>Название</translation>
    </message>
    <message>
        <source>Title field of the TAG ID3v2 of the video</source>
        <translation>Поле Название тега ID3v2 видеофайла</translation>
    </message>
    <message>
        <source>artist</source>
        <translation>Исполнитель</translation>
    </message>
    <message>
        <source>Artist field of the TAG ID3v2 of the video</source>
        <translation>Поле Исполнитель тега ID3v2 видеофайла</translation>
    </message>
    <message>
        <source>album</source>
        <translation>Альбом</translation>
    </message>
    <message>
        <source>Album field of the TAG ID3v2 of the video</source>
        <translation>Поле Альбом тега ID3v2 видеофайла</translation>
    </message>
    <message>
        <source>date</source>
        <translation>Дата</translation>
    </message>
    <message>
        <source>Date field of the TAG ID3v2 of the video</source>
        <translation>Поле Дата тега ID3v2 видеофайла</translation>
    </message>
    <message>
        <source>comment</source>
        <translation>Комментарий</translation>
    </message>
    <message>
        <source>Comment field of the TAG ID3v2 of the video</source>
        <translation>Поле Комментарий тега ID3v2 видеофайла</translation>
    </message>
    <message>
        <source>composer</source>
        <translation>Композитор</translation>
    </message>
    <message>
        <source>The software with which the video was created</source>
        <translation>Название программы в которой было создано видео</translation>
    </message>
    <message>
        <source>See also</source>
        <translation>Смотрите также</translation>
    </message>
    <message>
        <source>Information on EXIF data</source>
        <translation>Информация о данных EXIF</translation>
    </message>
    <message>
        <source>TAG in ffmpeg</source>
        <translation>Теги в ffmpeg</translation>
    </message>
    <message>
        <source>Standard ID3v2</source>
        <translation>Стандарт ID3v2</translation>
    </message>
    <message>
        <source>Standard MPEG-7 on the descriptors of multimedia contents</source>
        <translation>Стандарт  MPEG-7 описания мультимедиа контента</translation>
    </message>
    <message>
        <source>This dialog allows to obtain detailed information on a multimedia file.</source>
        <translation>Это диалоговое окно позволяет получить подробную информацию о мультимедиа файле.</translation>
    </message>
</context>
<context>
    <name>0112</name>
    <message>
        <source> Rename: Allows to rename the selected favorite.</source>
        <translation>Переименовать: позволяет переименовать выделенное избранное.</translation>
    </message>
    <message>
        <source> Remove: Allows to remove the selected favorite.</source>
        <translation>Удалить: позволяет удалить выделенное избранное.</translation>
    </message>
    <message>
        <source>Manage favorites</source>
        <translation>Управление избранным</translation>
    </message>
    <message>
        <source>The Manage favorite dialog allows you to manage existing favorites</source>
        <translation>Диалоговое окно Управление избранным позволяет управлять существующим избранным</translation>
    </message>
    <message>
        <source>The existing favorites are listed in the high part of the dialog. Select one of them and click on one of the following buttons:</source>
        <translation>Существующее избранное приведено в верхней части диалогового окна. Выберите одно из них и нажмите на одну из кнопок:</translation>
    </message>
</context>
<context>
    <name>0113</name>
    <message>
        <source>Manage style</source>
        <translation>Управление стилями</translation>
    </message>
    <message>
        <source>Reset a standard style (that you modified) has its default values.</source>
        <translation>Сброс настроек стандартного стиля (которые были изменены) на значения по умолчанию.</translation>
    </message>
    <message>
        <source>Standard style</source>
        <translation>Стандартный стиль</translation>
    </message>
    <message>
        <source>Rename</source>
        <translation>Переименовать</translation>
    </message>
    <message>
        <source>Standard style you modified</source>
        <translation>Стандартный стиль, который вы изменили</translation>
    </message>
    <message>
        <source>Rename, Reset to default</source>
        <translation>Переименовать, Сбросить по умолчанию</translation>
    </message>
    <message>
        <source>Custom style</source>
        <translation>Пользовательский стиль</translation>
    </message>
    <message>
        <source>Rename, Remove</source>
        <translation>Переименовать, Удалить</translation>
    </message>
    <message>
        <source>Allows to rename the selected style.</source>
        <translation>Позволяет переименовать выделенный стиль.</translation>
    </message>
    <message>
        <source>Reset to default</source>
        <translation>Сбросить по умолчанию</translation>
    </message>
    <message>
        <source>Allows to delete the customizations of a standard style and thus to return it to the default values for this style. It concerns as well the name of the style as the associated settings.</source>
        <translation>Позволяет удалить настройки стандартного стиля, тем самым вернув его значения по умолчанию. Это касается как имени стиля так и соответствующих настроек.</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>Удалить</translation>
    </message>
    <message>
        <source>Allows to remove the personalized style.</source>
        <translation>Позволяет удалить пользовательский стиль.</translation>
    </message>
    <message>
        <source>Rename existing style,</source>
        <translation>Переименовать существующий стиль,</translation>
    </message>
    <message>
        <source>Remove custom style,</source>
        <translation>Удалить пользовательский стиль,</translation>
    </message>
    <message>
        <source>for a standard style</source>
        <translation>для стандартного стиля</translation>
    </message>
    <message>
        <source>for a standard style you modified or for a custom style</source>
        <translation>для стандартного стиля, который вы изменили, или для пользовательского стиля</translation>
    </message>
    <message>
        <source>The existing styles are listed in the high part of the dialog. They appear with an icon which has various meanings:</source>
        <translation>Список существующих стилей представлен в верхней части диалогового окна. Они появляются с значком, который имеет разные значения:</translation>
    </message>
    <message>
        <source>The Manage style dialog allows several things:</source>
        <translation>Диалоговое окно Управление стилями позволяет сделать несколько вещей:</translation>
    </message>
    <message>
        <source>According to the type of the selected style, you can execute various actions:</source>
        <translation>В зависимости от типа выбранного стиля, вы можете выполнять различные действия:</translation>
    </message>
    <message>
        <source>The followed actions are available:</source>
        <translation>Доступны следующие действия:</translation>
    </message>
</context>
<context>
    <name>0114</name>
    <message>
        <source>Music properties</source>
        <translation>Параметры музыки</translation>
    </message>
    <message>
        <source>Settings for the music track (upper part of the dialog)</source>
        <translation>Параметры музыкального трека (верхняя часть окна)</translation>
    </message>
    <message>
        <source>Functional Principles</source>
        <translation>Принципы функционирования</translation>
    </message>
    <message>
        <source> The main functional principle for music tracks is that as long as you do not change the settings, the previous settings apply. So, if: </source>
        <translation>Основным принципом функционирования музыкальных дорожек является то, что до тех пор пока вы не измените настройки применяются предыдущие параметры. Так, если:</translation>
    </message>
    <message>
        <source>Slide 1 - Defines a play list</source>
        <translation>Слайд 1 - определен плейлист</translation>
    </message>
    <message>
        <source>Slide 2 - Contains no settings</source>
        <translation>Слайд 2 - не содержит настроек музыки</translation>
    </message>
    <message>
        <source>Slide 3 - Contains no settings</source>
        <translation>Слайд 3 - не содержит настроек музыки</translation>
    </message>
    <message>
        <source>Slide 4 - Defines a play list</source>
        <translation>Слайд 4 - определен плейлист</translation>
    </message>
    <message>
        <source>Slide 5 - Contains no settings</source>
        <translation>Слайд 5 - не содержит настроек музыки</translation>
    </message>
    <message>
        <source>Slide 2 and 3 continue to play the play list defined in slide 1</source>
        <translation>На слайдах 2 и 3 продолжает воспроизводиться плейлист, определенный на слайде 1</translation>
    </message>
    <message>
        <source>Slide 5 continues to play the play list define in slide 4</source>
        <translation>На слайде 5 продолжает воспроизводиться плейлист, определенный на слайде 4</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation>Без изменений</translation>
    </message>
    <message>
        <source>No specific settings</source>
        <translation>Без пользовательских настроек</translation>
    </message>
    <message>
        <source>Change sound level</source>
        <translation>Изменить уровень громкости</translation>
    </message>
    <message>
        <source>Set to pause</source>
        <translation>Поставить на паузу</translation>
    </message>
    <message>
        <source>Start a new playlist</source>
        <translation>Начать новый плейлист</translation>
    </message>
    <message>
        <source>Allows you to create a new playlist. If a list defined in a previous slide, is still playing, it is stopped with a fade-out effect (progressive decline of the sound volume up to complete stop).</source>
        <translation>Позволяет создать новый плейлист. Если список, определенный в предыдущем слайде, до сих пор играет, то он останавливается с эффектом затухания (прогрессивное снижение громкости звука до полной остановки).</translation>
    </message>
    <message>
        <source>The playlist (bottom part of the dialog)</source>
        <translation>Список воспроизведения (нижняя часть окна)</translation>
    </message>
    <message>
        <source> This playlist section consists of two parts: </source>
        <translation>Список воспроизведения состоит из двух частей: </translation>
    </message>
    <message>
        <source>The toolbar containing controls for the playlist</source>
        <translation>Панель инструментов, содержащая элементы управления списком воспроизведения</translation>
    </message>
    <message>
        <source>The list of the music files composing the playlist</source>
        <translation>Список музыкальных файлов, составляющих в плейлист</translation>
    </message>
    <message>
        <source>The toolbar</source>
        <translation>Панель инструментов</translation>
    </message>
    <message>
        <source>Adds a file to the playlist A file selection dialog appears, allowing you to select a file.</source>
        <translation>Добавляет файл в список воспроизведения. Появится диалоговое окно выбора файлов, позволяющее выбрать файл.</translation>
    </message>
    <message>
        <source>Changes the order in which the music files will be played. Moves the currently selected file one step up.</source>
        <translation>Изменение порядка в котором музыкальные файлы будут воспроизводиться. Перемещение выбранного файла на один шаг вверх.</translation>
    </message>
    <message>
        <source>Changes the order in which the music files will be played. Moves the currently selected file one step down.</source>
        <translation>Изменение порядка в котором музыкальные файлы будут воспроизводиться.
Перемещение выбранного файла на один шаг вниз.</translation>
    </message>
    <message>
        <source>The playlist</source>
        <translation>Список воспроизведения</translation>
    </message>
    <message>
        <source>The fade in/out effects and the increase/decrease of volume take place during the entering slide transitions. Consequently: </source>
        <translation>Эффекты затухания / нарастания  и увеличение / уменьшение громкости происходят во время входного перехода между слайдами. Следовательно: </translation>
    </message>
    <message>
        <source>They last for the same time as the entering transition.</source>
        <translation>Они происходят за то же время, что и входящий переход.</translation>
    </message>
    <message>
        <source>If a slide has an entering transition set to &quot;No transition&quot;, the sound effect is not progressive but instantaneous.</source>
        <translation>Если слайд имеет входящий переход типа &quot;Без перехода&quot;, то звуковой эффект является не прогрессивным, а мгновенным.</translation>
    </message>
    <message>
        <source>The Music properties dialog allows you to specify the music track.</source>
        <translation>Диалоговое окно Параметры музыки позволяет настроить музыкальный трек.</translation>
    </message>
    <message>
        <source>Then:</source>
        <translation>Тогда:</translation>
    </message>
    <message>
        <source>The following options are apply to the current music during the slide:</source>
        <translation>Следующие параметры применяются к музыке текущего слайда:</translation>
    </message>
    <message>
        <source>Specifies that the sound volume is reduced during this slide. (This option is particularly useful, for example, to reduce the sound of the music during the play of a video.)</source>
        <translation>Указывает, что с этого слайда громкость звука уменьшается. (Эта настройка особенно полезна, например, для уменьшения звука музыки во время воспроизведения видео.)</translation>
    </message>
    <message>
        <source>Pauses the current play list.</source>
        <translation>Пауза текущего списка воспроизведения.</translation>
    </message>
    <message>
        <source>The music files are listed in the order in which they will be played, from top to bottom.</source>
        <translation>Музыкальные файлы располагаются в том порядке, в котором они будут воспроизведены, сверху вниз.</translation>
    </message>
    <message>
        <source>The Volume column defines the &quot; Master volume &quot; for the file. This volume is independent of any reductions in the volume that you define in the upper part of the dialog.</source>
        <translation>В столбце &quot;Громкость&quot; показывается общая громкость файла. Она не засвисит от изменения громкости, которое задается в верхней части диалогового окна.</translation>
    </message>
    <message>
        <source>The Credit column defines if the file should appear or not when using %STM% variable in a credit title. For more information on variables, see: &lt;a href=&quot;0013.html&quot;&gt;Dynamic variables&lt;/a&gt;</source>
        <translation>В столбце &quot;Показ в титрах&quot; определяется будет отображаться данный файл в тирах при использовании переменной %STM% или нет. Более подробно о переменных смотрите: &lt;a href=&quot;0013.html&quot;&gt;Динамические переменные&lt;/a&gt;</translation>
    </message>
    <message>
        <source>Remarks</source>
        <translation>Примечания</translation>
    </message>
    <message>
        <source>Cut the currently selected file from the playlist. The &lt;a href=&quot;0124.html&quot;&gt;Cut a sound file&lt;/a&gt; dialog appears.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Removes the currently selected file from the playlist.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>You can double click a music file from the playlist to edit it, the &lt;a href=&quot;0124.html&quot;&gt;Cut a sound file&lt;/a&gt; dialog appears.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>0115</name>
    <message>
        <source>Render video</source>
        <translation>Создание видео</translation>
    </message>
    <message>
        <source>Description of the dialog box</source>
        <translation>Описание диалогового окна</translation>
    </message>
    <message>
        <source>Destination file</source>
        <translation>Файл назначения</translation>
    </message>
    <message>
        <source>Indicate here the name of the destination file. </source>
        <translation>Укажите здесь имя файла назначения. </translation>
    </message>
    <message>
        <source> Click on this button to select graphically a file and a directory.</source>
        <translation>Нажмите эту кнопку для выбора файла и папки.</translation>
    </message>
    <message>
        <source>Rendering</source>
        <translation>Обработать</translation>
    </message>
    <message>
        <source>The rendering can be made on the whole project or only on a part.</source>
        <translation>Может быть обработан весь проект или только его часть.</translation>
    </message>
    <message>
        <source>This choice is made: </source>
        <translation>Выберите:</translation>
    </message>
    <message>
        <source>By checking the option &lt;B&gt;All slides&lt;/B&gt; to render the video of the whole project</source>
        <translation>опцию &lt;B&gt;Все слайды&lt;/B&gt; для создания видеофайла из всего проекта</translation>
    </message>
    <message>
        <source>Or by checking the option &lt;B&gt;From&lt;/B&gt; and then entering the numbers of the start and end slides to generate a video of only a part of the project.</source>
        <translation>или опцию &lt;B&gt;С ... По... &lt;/B&gt;, введите номера начального и конечного слайдов для создания видеофайла только из части проекта.</translation>
    </message>
    <message>
        <source>Sound (include sound in the video)</source>
        <translation>Звук (включить звук в видео)</translation>
    </message>
    <message>
        <source>If this box is checked then the sound track will be included in the video</source>
        <translation>Если этот флажок установлен, то звуковая дорожка будет включена в видео</translation>
    </message>
    <message>
        <source>Language</source>
        <translation>Язык</translation>
    </message>
    <message>
        <source>Defines the value of the Language field. </source>
        <translation>Определяет значение поля языка.</translation>
    </message>
    <message>
        <source>In device mode</source>
        <translation>В режиме устройств</translation>
    </message>
    <message>
        <source>Device type</source>
        <translation>Тип устройства</translation>
    </message>
    <message>
        <source>Allows you to select a device type.</source>
        <translation>Позволяет выбрать тип оборудования.</translation>
    </message>
    <message>
        <source>Model</source>
        <translation>Модель устройства</translation>
    </message>
    <message>
        <source>Allows you to select a device model.</source>
        <translation>Позволяет выбрать модель оборудования.</translation>
    </message>
    <message>
        <source>In lossless mode</source>
        <translation>В режиме Сжатие без потерь</translation>
    </message>
    <message>
        <source>Image format</source>
        <translation>Формат изображения</translation>
    </message>
    <message>
        <source>Select the image format to be used to render the video from the displayed list.</source>
        <translation>Выберите формат изображения создаваемого видеофайла.</translation>
    </message>
    <message>
        <source>In advanced mode</source>
        <translation>В режиме дополнительных настроек</translation>
    </message>
    <message>
        <source>File format</source>
        <translation>Формат файла</translation>
    </message>
    <message>
        <source>Select the type of file to be used to render the video from the displayed list.</source>
        <translation>Выберите формат создаваемого файла.</translation>
    </message>
    <message>
        <source>Video Standard</source>
        <translation>Стандарт видео</translation>
    </message>
    <message>
        <source>Select the video standard to be used: PAL or NTSC.</source>
        <translation>Выбор используемого стандарта видео:  PAL или NTSC.</translation>
    </message>
    <message>
        <source>Video codec</source>
        <translation>Видео кодек</translation>
    </message>
    <message>
        <source>Select the video codec to be used to render the video from the displayed list.</source>
        <translation>Выберите видео кодек для создаваемого файла.</translation>
    </message>
    <message>
        <source>Select the video compression ratio from the displayed list</source>
        <translation>Выберите битрейт видео создаваемого файла</translation>
    </message>
    <message>
        <source>Audio codec</source>
        <translation>Аудио кодек</translation>
    </message>
    <message>
        <source>Select the audio codec to be used to render the video from the displayed list.</source>
        <translation>Выберите аудио кодек для создаваемого файла.</translation>
    </message>
    <message>
        <source>Render the movie</source>
        <translation>Создание видео</translation>
    </message>
    <message>
        <source> Once you have selected the device or set the advanced parameters, one click on the OK button starts the process of rendering the video. </source>
        <translation>После выбора устройства или задания дополнительных настроек, один раз щелкните на кнопке OK для запуска процесса создания видео.</translation>
    </message>
    <message>
        <source>At any time during this process, one click on the &quot;Cancel&quot; button stops the process. </source>
        <translation>В любое время в течение этого процесса вы можете остановить его, нажав один раз кнопку «Отмена».</translation>
    </message>
    <message>
        <source> Depending on the device model or the advanced parameters which you selected, the generation can take quite a long time. </source>
        <translation>В зависимости от модели устройства или дополнительных параметров, которые вы выбрали, создание видео может занять довольно долгое время.</translation>
    </message>
    <message>
        <source>Generally, for a Full-HD 1080p video: </source>
        <translation>Например, для Full-HD 1080p видео: </translation>
    </message>
    <message>
        <source>On a PC with 4 fast cores (Core i7 for example) : The process will take approximately 2 minutes for each minute of video to be rendered</source>
        <translation>На 4-х ядерном ПК (например, Core i7): этот процесс займет около 2 минут на каждую минуту создаваемого  видео</translation>
    </message>
    <message>
        <source>On a PC with 2 cores (Core 2 duo for example) : The process will take approximately 5 minutes for each minute of video to be rendered</source>
        <translation>На 2-х ядерном ПК (например, Core 2 duo): этот процесс займет около 5 минут на каждую минуту создаваемого  видео</translation>
    </message>
    <message>
        <source> This amounts to 2 to 5 hours for a one-hour video. </source>
        <translation>Это составляет около 2-5 часов на один час видео.</translation>
    </message>
    <message>
        <source>This duration will be much shorter for a video in VGA resolution. That is why we recommend you to carry out all tests and focusing trials at low resolution, and to render your videos in Full-HD only for the last step. </source>
        <translation>Эта продолжительность будет гораздо короче для видео в разрешении VGA. Поэтому мы рекомендуем проводить все испытания и пробы на низком разрешении, а создание видео в Full-HD качестве - только для финального результата.</translation>
    </message>
    <message>
        <source>ISO 639</source>
        <translation>ISO 639</translation>
    </message>
    <message>
        <source>This dialog allows you to render the project as a video file.</source>
        <translation>Это диалоговое окно позволяет создать видеофайл из проекта.</translation>
    </message>
    <message>
        <source>This value is used by players to indicate in which language is the audio track. This value is on 3 characters and follows this recommendation: </source>
        <translation>Это значение используется плеерами для определения языка звуковой дорожки. Оно должно содержать 3 символа в соответствии с рекомендациями: </translation>
    </message>
    <message>
        <source>Bitrate</source>
        <translation>Битрейт</translation>
    </message>
    <message>
        <source>This dialog has different appearances depending on whether you clicked the Device type, Lossless, Advanced or Soundtrack button. </source>
        <translation>Это диалоговое окно имеет различные параметры в зависимости от того, какую кнопку вы нажали: Устройства, Сжатие без потерь, Дополнительно или Экспорт аудио дорожки.</translation>
    </message>
    <message>
        <source>Join thumbnail to rendered file</source>
        <translation>Присоединить обложку к создаваемому файлу</translation>
    </message>
    <message>
        <source>If this box is checked then a thumbnail file will be created with video. </source>
        <translation>Если этот флажок установлен, обложка будет создана вместе с видеофайлом.</translation>
    </message>
    <message>
        <source>Join XBMC .nfo file to rendered file</source>
        <translation>Присоединить XBMC .nfo файл к создаваемому файлу</translation>
    </message>
    <message>
        <source>If this box is checked then a &lt;a href=&quot;0044.html&quot;&gt;XBMC .nfo&lt;/a&gt; file will be created with video. </source>
        <translation>Если этот флажок установлен, &lt;a href=&quot;0044.html&quot;&gt;XMBC .nfo&lt;/a&gt;  файл будет создан вместе с видеофайлом.</translation>
    </message>
    <message>
        <source>Select the audio compression ratio from the displayed list</source>
        <translation>Выберите битрейт аудио создаваемого файла</translation>
    </message>
    <message>
        <source>Frequency</source>
        <translation>Частота</translation>
    </message>
    <message>
        <source>In export soundtrack mode</source>
        <translation>В режиме экспорта аудио дорожки</translation>
    </message>
    <message>
        <source>Select the type of file to be used to render the soundtrack from the displayed list.</source>
        <translation>Выберите формат создаваемой аудио дорожки.</translation>
    </message>
    <message>
        <source>At the dialog bottom</source>
        <translation>В нижней части диалогового окна</translation>
    </message>
    <message>
        <source>Note: the project properties are saved into the video as TAG (METADATA) which are used by a lot of indexing programs or by </source>
        <translation>Примечание: свойства проекта сохраняются в видео как тег (метаданные), которые используются многими программами индексации или </translation>
    </message>
    <message>
        <source>Media Center Systems</source>
        <translation>мультимедиа системами</translation>
    </message>
    <message>
        <source>For more information on joined files, see &lt;a href=&quot;003A.html&quot;&gt;File attachments&lt;/a&gt;</source>
        <translation>Для более подробной информации о присоединяемых файлах смотрите &lt;a href=&quot;003A.html&quot;&gt;Присоединяемые файлы&lt;/a&gt;</translation>
    </message>
    <message>
        <source>Select the frequency to use for audio during the rendering.</source>
        <translation>Выберите частоту аудио создаваемого файла.</translation>
    </message>
    <message>
        <source> The properties button allows you to open the &lt;a href=&quot;0108.html&quot;&gt;Project properties dialog&lt;/a&gt;. It allows you to adjust the properties before generating the video. </source>
        <translation>Кнопка Свойства проекта  позволяет открыть диалоговое окно &lt;a href=&quot;0108.html&quot;&gt;Свойства проекта&lt;/a&gt;. Она позволяет настроить свойства перед созданием видео.</translation>
    </message>
    <message>
        <source>Variable bitrate</source>
        <translation>Переменный битрейт</translation>
    </message>
    <message>
        <source>If this box is checked, the bitrate is variable. (Note: This option is available only for h264 codec.)</source>
        <translation>Если этот флажок установлен, то битрейт является переменным. (Примечание: эта опция доступна только для h264 кодека)</translation>
    </message>
    <message>
        <source>Remarks:</source>
        <translation>Примечания:</translation>
    </message>
    <message>
        <source> &lt;U&gt;Rendering duration:&lt;/U&gt;</source>
        <translation> &lt;U&gt;Продолжительность создания видео:&lt;/U&gt;</translation>
    </message>
    <message>
        <source> &lt;U&gt;Variable bitrate:&lt;/U&gt;</source>
        <translation> &lt;U&gt;Переменный битрейт:&lt;/U&gt;</translation>
    </message>
    <message>
        <source> If variable bitrate is activated, the video compression bitrate could vary from -50% to +125% </source>
        <translation>Если переменный битрейт активирован, то битрейт сжатого видео может варьировать от -50% до +125% </translation>
    </message>
    <message>
        <source>If the project contains mostly pictures, this option can significantly reduce the size of the video file (up to 80%)</source>
        <translation>Если проект содержит в основном фотографии, этот параметр может существенно уменьшить размер видео-файла (до 80%)</translation>
    </message>
    <message>
        <source>By cons, if the project contains mostly videos this option will increase the size of the video file</source>
        <translation>Если проект содержит в основном видео, этот параметр увеличит размер видео файла</translation>
    </message>
    <message>
        <source> By default, variable bitrate is activated when duration of videos are less than half of the total duration of the projet. </source>
        <translation> По умолчанию переменный битрейт активирован, если длительность видео составляет менее половины общей продолжительности проекта. </translation>
    </message>
</context>
<context>
    <name>0116</name>
    <message>
        <source>Ruler properties</source>
        <translation>Свойства линеек</translation>
    </message>
    <message>
        <source>Edge of the screen</source>
        <translation>Края экрана</translation>
    </message>
    <message>
        <source>Corresponds to the edge of the screen.</source>
        <translation>соответствует краям экрана.</translation>
    </message>
    <message>
        <source>TV margins</source>
        <translation>Поля ТВ</translation>
    </message>
    <message>
        <source>In ffDiaporama, the TV margins are of type &quot;Title safe area&quot; and are defined on 90% in width and 90% in height, for all the project geometries.</source>
        <translation>в ffDiaporama, поля телевизора имеют тип &quot;Безопасная зона&quot; и определяются на 90% в ширину и 90% в высоту, для всех геометрий проекта.</translation>
    </message>
    <message>
        <source>Centre of the screen</source>
        <translation>Центр экрана</translation>
    </message>
    <message>
        <source>Corresponds to the center of the screen.</source>
        <translation>соответствует центру экрана.</translation>
    </message>
    <message>
        <source>Unselected blocks</source>
        <translation>Невыделенные объекты</translation>
    </message>
    <message>
        <source>For all the objects which are not a part of the selection, create rulers for the top, bottom, left and right edges of blocks as well as for the centers of blocks.</source>
        <translation>для всех объектов, которые не являются частью выделения, создаются линейки по верхней, нижней, левой и правой границе блоков, а также для центров блоков.</translation>
    </message>
    <message>
        <source>Remarks:</source>
        <translation>Примечания:</translation>
    </message>
    <message>
        <source>Rulers can be activated or deactivated one by one.</source>
        <translation>Линейки могут быть включены или отключены по отдельности.</translation>
    </message>
    <message>
        <source>When a ruler is activated, the mouse is attracted towards this ruler. This is valid as well for the movements of blocks as for the resizing (movements of the handles).</source>
        <translation>Когда линейка включена, мышь притягивается к ней. Это справедливо как для перемещения блоков, так и для изменения размера (перемещение маркера).</translation>
    </message>
    <message>
        <source>TV margins rullers are not available for thumbnails editing.</source>
        <translation>Линейки Поля ТВ не доступны при редактировании обложки.</translation>
    </message>
    <message>
        <source>See also</source>
        <translation>Также смотрите</translation>
    </message>
    <message>
        <source>Description of TV margins and overscan</source>
        <translation>Описание телевизионных полей и оверскан (вылеты развертки)</translation>
    </message>
    <message>
        <source>This dialog allows you to enable or disable rulers.</source>
        <translation>Это диалоговое окно позволяет включить или отключить линейки.</translation>
    </message>
</context>
<context>
    <name>0117</name>
    <message>
        <source>Edit thumbnail model</source>
        <translation>Изменение шаблона обложки</translation>
    </message>
    <message>
        <source>This dialog allows you to edit custom thumbnails and custom thumbnails models.</source>
        <translation>Это диалоговое окно позволяет отредактировать пользовательскую обложку и шаблон обложки.</translation>
    </message>
    <message>
        <source>It&apos;s a simplified version of the &lt;a href=&quot;0119.html&quot;&gt;Slides properties dialog&lt;/a&gt; and as it, it includes numerous zones:</source>
        <translation>Это упрощенная версия диалогового окна &lt;a href=&quot;0119.html&quot;&gt;Параметры слайда&lt;/a&gt; и также как и оно включает в себя множество областей:</translation>
    </message>
    <message>
        <source>On the top: The &lt;a href=&quot;#Toolbar&quot;&gt;Toolbar&lt;/a&gt; allows to launch the main thumbnail editing commands.</source>
        <translation>Сверху: &lt;a href=&quot;#Toolbar&quot;&gt;Панель инструментов&lt;/a&gt;, позволяющая запускать основные команды редактирования обложки.</translation>
    </message>
    <message>
        <source>On the right: The &lt;a href=&quot;#BlockTable&quot;&gt;Blocks table&lt;/a&gt; and the &lt;a href=&quot;#BlockSettings&quot;&gt;Block settings&lt;/a&gt; zones.</source>
        <translation>Справа: &lt;a href=&quot;#BlockTable&quot;&gt;таблица блоков&lt;/a&gt; и область &lt;a href=&quot;#BlockSettings&quot;&gt;параметров блоков&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>Toolbar</source>
        <translation>Панель инструментов</translation>
    </message>
    <message>
        <source> The toolbar allows to launch the main thumbnail editing commands. </source>
        <translation>Панель инструментов позволяет запускать основные команды редактирования обложки.</translation>
    </message>
    <message>
        <source>Add a new title block - Open a sub menu with the following options: </source>
        <translation>Добавить текст - откроется подменю со следующими параметрами: </translation>
    </message>
    <message>
        <source>Add a simple title block</source>
        <translation>Добавить простой блок текста</translation>
    </message>
    <message>
        <source>Add a title clip-art block</source>
        <translation>Добавить клипарт блок текста</translation>
    </message>
    <message>
        <source>Once you have selected one of the options, the &lt;a href=&quot;0120.html&quot;&gt;Edit Text dialog&lt;/a&gt; opens.</source>
        <translation>После того как вы выбрали один из вариантов, откроется диалоговое окно &lt;a href=&quot;0120.html&quot;&gt; Редактировать текст&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>Add one or several new blocks of images or video. A &lt;a href=&quot;0109.html&quot;&gt;file selection dialog&lt;/a&gt; appears allowing you to select files. </source>
        <translation>Добавить один или несколько новых блоков изображений или видео. Появится диалоговое окно &lt;a href=&quot;0109.html&quot;&gt;выбора файла&lt;/a&gt;, позволяющий выбрать файлы. </translation>
    </message>
    <message>
        <source>Note: in case of multiple selection, files are added in the alphabetical order of the filenames or in the digital order of shots (according to the option selected in the &lt;a href=&quot;0101.html&quot;&gt;Application options dialog&lt;/a&gt;).</source>
        <translation>Примечание: в случае множественного выбора, файлы добавляются в алфавитном порядке имен файлов или в цифровом порядке кадров (в зависимости от выбранной опции в диалоговом окне &lt;a href=&quot;0101.html&quot;&gt;Настройки программы&lt;/a&gt;).</translation>
    </message>
    <message>
        <source>Edit blocks - Open a sub menu with the following options: </source>
        <translation>Изменить блок - откроется подменю, содержащее следующие параметры: </translation>
    </message>
    <message>
        <source>Copy the current block to the ffDiaporama clipboard and remove it from the thumbnail.</source>
        <translation>Скопировать текущий блок в буфер обмена ffDiaporama и удалить с обложки.</translation>
    </message>
    <message>
        <source>Copy the current block to the ffDiaporama clipboard.</source>
        <translation>Скопировать текущий блок в буфер обмена ffDiaporama.</translation>
    </message>
    <message>
        <source>Paste block from the ffDiaporama clipboard and insert it to the end of the block table</source>
        <translation>Вставить блок из буфера обмена ffDiaporama и поместить его в конец таблицы блоков</translation>
    </message>
    <message>
        <source>Remove the current block</source>
        <translation>Удалить текущий блок</translation>
    </message>
    <message>
        <source>Open the &lt;a href=&quot;0120.html&quot;&gt;Edit text block dialog&lt;/a&gt;.</source>
        <translation>Открывает диалоговое окно &lt;a href=&quot;0120.html&quot;&gt;Редактировать текст блока&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>Open the &lt;a href=&quot;0110.html&quot;&gt;Image framing and correction dialog&lt;/a&gt;. This button is active only for objects containing images or videos.</source>
        <translation>Открыть диалоговое окно &lt;a href=&quot;0110.html&quot;&gt;Кадрирование и коррекция изображения&lt;/a&gt;. Эта функция активна только для объектов, содержащих изображения или видео.</translation>
    </message>
    <message>
        <source>Arrange blocks - Open a sub menu with the following options: </source>
        <translation>Упорядочить блоки -  откроется подменю со следующими параметрами: </translation>
    </message>
    <message>
        <source>Align to top</source>
        <translation>Выровнять по верху</translation>
    </message>
    <message>
        <source>Align to midle</source>
        <translation>Выровнять по середине</translation>
    </message>
    <message>
        <source>Align to bottom</source>
        <translation>Выровнять по низу</translation>
    </message>
    <message>
        <source>Align to left</source>
        <translation>Выровнять по левому краю</translation>
    </message>
    <message>
        <source>Align to center</source>
        <translation>Выровнять по центру</translation>
    </message>
    <message>
        <source>Align to right</source>
        <translation>Выровнять по правому краю</translation>
    </message>
    <message>
        <source>Distribute horizontally</source>
        <translation>Распределить горизонтально</translation>
    </message>
    <message>
        <source>Distribute vertically</source>
        <translation>Распределить горизонтально</translation>
    </message>
    <message>
        <source>Change the order of blocks by moving the active block upward (towards the background)</source>
        <translation>Изменить порядок блоков перемещением активного блока вверх (на задний план)</translation>
    </message>
    <message>
        <source>Change the order of blocks by moving the active block downward (towards the foreground)</source>
        <translation>Изменить порядок блоков перемещением активного блока вниз (на передний план)</translation>
    </message>
    <message>
        <source>Display information on active block. (Remark: This function is available only for &quot;image&quot; or &quot;video&quot; blocks.)</source>
        <translation>Показать информацию об активном блоке. (Примечание: эта функция доступна только для блоков изображений или видео.)</translation>
    </message>
    <message>
        <source>Allows you to open the &lt;a href=&quot;0116.html&quot;&gt;Ruler properties dialog&lt;/a&gt;</source>
        <translation>Позволяет открыть диалоговое окно &lt;a href=&quot;0116.html&quot;&gt;Свойства линеек&lt;/a&gt;</translation>
    </message>
    <message>
        <source> It is also possible to open contextual menus by: </source>
        <translation>Также можно открыть контекстное меню:</translation>
    </message>
    <message>
        <source>Right clicking on zones.</source>
        <translation>Правым щелчком мыши на области.</translation>
    </message>
    <message>
        <source>Right click on blocks table or on interactive zone when no block was selected.</source>
        <translation>Правым щелчком мыши на таблице блоков или на интерактивной области, когда ни один блок не выделен.</translation>
    </message>
    <message>
        <source>Right click on one of the blocks of a multiple selection, on blocks table or on interactive zone.</source>
        <translation>Правым щелчком мыши на одном из выделенных блоков, на таблице блоков или на интерактивной области.</translation>
    </message>
    <message>
        <source>Each of these contextual menus propose commands which depend on what you have clicked.</source>
        <translation>Каждое из этих контекстных меню предлагает команды, которые зависят от того, что вы нажали.</translation>
    </message>
    <message>
        <source>Interactive zone</source>
        <translation>Интерактивная область</translation>
    </message>
    <message>
        <source> The interactive zone allows you to move and interactively re-size blocks. </source>
        <translation> Интерактивная область позволяет перемещать и изменять размеры блоков в интерактивном режиме. </translation>
    </message>
    <message>
        <source>Selected blocks are shown with a frame. (It allows to differentiate them from other graphic elements of the thumbnail).</source>
        <translation>Выделенные блоки показаны с рамкой. (Это позволяет отличать их от других графических элементов обложки).</translation>
    </message>
    <message>
        <source>Control handles (small square) are shown on sides and on corners of the selection frame.</source>
        <translation>Маркеры управления (небольшие квадратики) показаны по бокам и в углах рамки выделения.</translation>
    </message>
    <message>
        <source>Rulers are displayed to facilitate the work with the mouse. See &lt;a href=&quot;0116.html&quot;&gt;Rulers settings&lt;/a&gt;</source>
        <translation>Линейки отображаются для облегчения работы с  мышью. Смотрите &lt;a href=&quot;0116.html&quot;&gt;Свойства линеек&lt;/a&gt;</translation>
    </message>
    <message>
        <source>Using the mouse:</source>
        <translation>Использование мыши:</translation>
    </message>
    <message>
        <source>To select a block: click the block</source>
        <translation>Чтобы выбрать блок: нажмите на него</translation>
    </message>
    <message>
        <source>To select multiple blocks: Select a first block by clicking on it and then, by clicking on the other blocks to be selected with pressing either the SHIFT or the CTRL key.</source>
        <translation>Чтобы выделить несколько блоков: выберите первый блок, нажав на него, а затем, нажмите на другие блоки, зажав клавишу SHIFT или CTRL.</translation>
    </message>
    <message>
        <source>To select a block under another block : Click the block to be selected by pushing both SHIFT and CTRL keys.</source>
        <translation>Чтобы выбрать блок под другим блоком: нажмите на блок, который будет выбран, зажав обе клавиши SHIFT и CTRL.</translation>
    </message>
    <message>
        <source>To unselect a block in a multiple selection: Click the block with pressing either the SHIFT or the CTRL key.</source>
        <translation>Чтобы снять выделение с одного из блоков: нажмите на блок, зажав клавишу SHIFT или CTRL.</translation>
    </message>
    <message>
        <source>To modify the size of the blocks of the selection: Click one of the handles of the selection and, while keeping the button of the mouse pressed, move the mouse.</source>
        <translation>Чтобы изменить размер выделенного блока: нажмите на один из маркеров управления и, не отпуская кнопку мыши, переместите мышь.</translation>
    </message>
    <message>
        <source>To move the blocks of the selection: Click one of the blocks of the selection and, while keeping the button of the mouse pressed, move the mouse.</source>
        <translation>Чтобы переместить выделенный блок: нажмите на один из выбранных блоков и, не отпуская кнопку мыши, переместите мышь.</translation>
    </message>
    <message>
        <source>Using the keyboard:</source>
        <translation>Использование клавиатуры:</translation>
    </message>
    <message>
        <source>To move the blocks of the selection, use the arrow keys.</source>
        <translation>Чтобы переместить выделенный блок, используйте клавиши со стрелками.</translation>
    </message>
    <message>
        <source>To change the size of the blocks of the selection, use SHIFT+arrows to move the upper left corner handle or CTRL+arrows to move the lower right corner handle.</source>
        <translation>Чтобы изменить размер выделенного блока, воспользуйтесь сочетанием клавиш SHIFT + стрелки для перемещения к верхнему левому углу или CTRL + стрелки для перемещения к нижнему правом углу.</translation>
    </message>
    <message>
        <source>Remarks:</source>
        <translation>Примечания:</translation>
    </message>
    <message>
        <source>A double click on a block opens the block editor associated with the block type (for a text block this will be the text editor, for an image block the reframing dialog, etc.)</source>
        <translation>Двойной щелчок на блоке открывает редактор блоков, связанный с этим типом блока (для текстового блока - это текстовый редактор, для блока изображения - диалог кадрирования и т.д.)</translation>
    </message>
    <message>
        <source>A right click on a block when the selection includes only a single block opens a contextual menu proposing the editing commands for a block.</source>
        <translation>Щелчок правой кнопкой мыши на блоке, когда выделен только один блок, открывает контекстное меню, предлагающее ряд команд редактирования блока.</translation>
    </message>
    <message>
        <source>A right click on a block when the selection includes multiple blocks opens a contextual menu proposing the editing commands for multiple blocks.</source>
        <translation>Щелчок правой кнопкой мыши на блоке, когда выделено несколько блоков, открывает контекстное меню, предлагающее ряд команд редактирования нескольких блоков.</translation>
    </message>
    <message>
        <source>Blocks table</source>
        <translation>Таблица блоков</translation>
    </message>
    <message>
        <source>The blocks table lists, from top to bottom, the present blocks in the thumbnail.</source>
        <translation>Таблица блоков представляет собой список блоков в обложке сверху вниз.</translation>
    </message>
    <message>
        <source>The order of the blocks is important! The first block (at the top of the list) is covered by the second block which is even covered by the following block and so on.</source>
        <translation>Порядок блоков важен! Первый блок (вверху списка) находится под  вторым блоком, который перекрыт следующим блоком и так далее.</translation>
    </message>
    <message>
        <source>Blocks are shown on 3 columns:</source>
        <translation>Блоки показаны в 3 столбца:</translation>
    </message>
    <message>
        <source>The first column contains or: </source>
        <translation>Первый столбец содержит или:</translation>
    </message>
    <message>
        <source> If the block is a title.</source>
        <translation> если блок является текстовым.</translation>
    </message>
    <message>
        <source>A thumbnail if the block is an image or a video.</source>
        <translation>Миниатюру, если блок является изображением или видео.</translation>
    </message>
    <message>
        <source> If the image or the video have a transformation filter.</source>
        <translation> если изображение или видео содержат фильтр трансформации.</translation>
    </message>
    <message>
        <source>The second column contains icons giving the state of the blocks</source>
        <translation>Второй столбец содержит значки, показывающие состояние блока</translation>
    </message>
    <message>
        <source>The third column indicates: </source>
        <translation>Третий столбец содержит: </translation>
    </message>
    <message>
        <source>If the block is a title: the text of the block</source>
        <translation>Если блок текстовый: текст блока</translation>
    </message>
    <message>
        <source>If the block is an image: </source>
        <translation>Если блок изображения: </translation>
    </message>
    <message>
        <source>The filename.</source>
        <translation>Имя файла.</translation>
    </message>
    <message>
        <source>The width x the height of the image in pixel (the format of the image - the geometry of the image).</source>
        <translation>Ширина x высота изображения в пикселях (формат изображения - геометрия изображения).</translation>
    </message>
    <message>
        <source>A summary of EXIF information on the image.</source>
        <translation>Общая EXIF информация об изображении.</translation>
    </message>
    <message>
        <source>If the block is a video: </source>
        <translation>Если это блок видео:</translation>
    </message>
    <message>
        <source>The duration of the video.</source>
        <translation>Продолжительность видео.</translation>
    </message>
    <message>
        <source>Double clicking on a block opens the block editor associated with the block type (for a text block this will be the text editor, for an image block the reframing dialog, etc.)</source>
        <translation>Двойной щелчок на блоке открывает редактор блоков, связанный с этим типом блока (для текстового блока - это текстовый редактор, для блока изображения - диалог кадрирования и т.д.)</translation>
    </message>
    <message>
        <source>Right clicking on a block when the selection includes only a single block opens a contextual menu proposing the editing commands for a block.</source>
        <translation>Щелчок правой кнопкой мыши на блоке, когда выделен только один блок, открывает контекстное меню, предлагающее ряд команд редактирования блока.</translation>
    </message>
    <message>
        <source>Right clicking on a block when the selection includes multiple blocks opens a contextual menu proposing the editing commands for multiple blocks.</source>
        <translation>Щелчок правой кнопкой мыши на блоке, когда выделено несколько блоков, открывает контекстное меню, предлагающее ряд команд редактирования нескольких блоков.</translation>
    </message>
    <message>
        <source>Blocks with locked properties are shown on a grey bottom.</source>
        <translation>Блоки с заблокированными свойствами показаны в сером цвете.</translation>
    </message>
    <message>
        <source>Selected blocks are shown on a red bottom if the focus is on the blocks table or on a blue bottom if the focus is on another element.</source>
        <translation>Выбранные блоки отображаются в красном цвете, если акцент делается на таблице блоков, или в синем цвете, если акцент делается на другом элементе.</translation>
    </message>
    <message>
        <source>To change the blocks order, use Drag &amp; Drop or &lt;B&gt;Up&lt;/B&gt; and &lt;B&gt;Down&lt;/B&gt; functions of the contextual menu.</source>
        <translation>Чтобы изменить порядок блоков, используйте перетаскивание или функции &lt;B&gt;Вверх&lt;/B&gt; и &lt;B&gt;Вниз&lt;/B&gt; контекстного меню.</translation>
    </message>
    <message>
        <source>It is possible to add files directly in the blocks table by using Drag and Drop with the file explorer.</source>
        <translation>Можно добавить файлы непосредственно в таблицу блоков с помощью перетаскивания из менеджера файлов (Проводника).</translation>
    </message>
    <message>
        <source>All blocks, whether title, image or video, possess a text element.</source>
        <translation>Все блоки, будь то заголовок, изображение или видео, могут иметь текстовый элемент.</translation>
    </message>
    <message>
        <source>During the insertion of a new block (Add title, Add file or Paste), the block is inserted: </source>
        <translation>Во время вставки нового блока (Добавить текст, Добавить файл или Вставить) он вставляется: </translation>
    </message>
    <message>
        <source>Always in the last position in the list of blocks (in the foreground)</source>
        <translation>всегда на последнем месте в таблице блоков (на переднем плане)</translation>
    </message>
    <message>
        <source>Block settings zone</source>
        <translation>Область параметров блока</translation>
    </message>
    <message>
        <source>Coordinates</source>
        <translation>Координаты</translation>
    </message>
    <message>
        <source>&lt;B&gt;For image or video blocks: &lt;/B&gt;Allows you to select a reframing style for the image. It has the same effect as selecting a style in the dialog: &lt;a href=&quot;0110.html&quot;&gt;Correct, reframe or cut image or video&lt;/a&gt;.</source>
        <translation>&lt;B&gt;Для блоков изображений и видео: &lt;/B&gt;позволяет выбрать стиль обрезки изображения. Имеет такой же эффект как выбор стиля в диалоговом окне: &lt;a href=&quot;0110.html&quot;&gt;Коррекция, кадрирование или обрезка изображения или видео&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>&lt;B&gt;For text blocks: &lt;/B&gt;Allows you to select the geometrical constraints to be applied to the block. Three type of constraint are available:</source>
        <translation>&lt;B&gt;Для блоков текста: &lt;/B&gt;позволяет выбрать ограничения геометрии, применяемые к блоку. Доступно три типа ограничений:</translation>
    </message>
    <message>
        <source>No constraint is applied to the selection rectangle.</source>
        <translation>К прямоугольнику выделения не применяются ограничения.</translation>
    </message>
    <message>
        <source>Lock selection rectangle to the actual geometry. It has no meaning until you have defined a shape in &quot;no constraint&quot; mode.</source>
        <translation>Прямоугольник выделения будет той же геометрии, что и в настоящее время. Не имеет смысла до тех пор, пока не будет определена форма в режиме &quot;Без ограничений&quot;.</translation>
    </message>
    <message>
        <source>Lock selection rectangle to the same geometry as the project, such that, if you place the image in full screen, the reframed part will correspond to the whole screen.</source>
        <translation>Прямоугольник выделение будет той же геометрии, что и сам проект. Если вы откроете изображение в полноэкранном режиме, то выбранная часть будет соответствовать всему экрану.</translation>
    </message>
    <message>
        <source>Allows you to select a pre-defined block size</source>
        <translation>Позволяет выбрать заранее определенный размер блока</translation>
    </message>
    <message>
        <source>Represents the horizontal offset of the block from the left. This position is defined as a percentage (%) of the total width of the image or in pixels (for a 1080p screen) according to the unit defined in the configuration dialog.</source>
        <translation>Горизонтальное смещение блока с левой стороны. Определяется как процент (%) от общей ширины изображения или в пикселях (на экране 1080) в соответствии с единицами измерения, заданными в диалоге конфигурации.</translation>
    </message>
    <message>
        <source>Represents the vertical offset of the block from the top. This position is defined as a percentage (%) of the total height of the image or in pixels (for a 1080p screen) according to the unit defined in the configuration dialog.</source>
        <translation>Вертикальное смещение блока сверху. Определяется как процент (%) от общей высоты изображения или в пикселях (на экране 1080) в соответствии с единицами измерения, заданными в диалоге конфигурации.</translation>
    </message>
    <message>
        <source>Represents the width of the block. This value is defined as a percentage (%) of the total width of the image or in pixels (for a 1080p screen) according to the unit defined in the configuration dialog box.</source>
        <translation>Ширина блока. Определяется как процент (%) от общей ширины изображения или в пикселях (на экране 1080) в соответствии с единицами измерения, заданными в диалоге конфигурации.</translation>
    </message>
    <message>
        <source>Represents the height of the block. This value is defined as a percentage (%) of the total height of the image or in pixels (for a 1080p screen) according to the unit defined in the configuration dialog.</source>
        <translation>Высота блока. Определяется как процент (%) от общей высоты изображения или в пикселях (на экране 1080) в соответствии с единицами измерения, заданными в диалоге конфигурации.</translation>
    </message>
    <message>
        <source>Rotation around the Z axis in degrees.</source>
        <translation>Вращение вокруг оси Z в градусах.</translation>
    </message>
    <message>
        <source>Rotation around the Y axis in degrees.</source>
        <translation>Вращение вокруг оси Y в градусах.</translation>
    </message>
    <message>
        <source>Rotation around the X axis in degrees.</source>
        <translation>Вращение вокруг оси X в градусах.</translation>
    </message>
    <message>
        <source>Block shape</source>
        <translation>Форма блока</translation>
    </message>
    <message>
        <source>This settings group deals with style management. For more information on style management, see : &lt;a href=&quot;0016.html&quot;&gt;Using style management&lt;/a&gt;</source>
        <translation>Это группа настроек управления стилями. Дополнительные сведения о управлении стилями смотрите: &lt;a href=&quot;0016.html&quot;&gt;Управление стилями&lt;/a&gt;</translation>
    </message>
    <message>
        <source>Shape</source>
        <translation>Форма</translation>
    </message>
    <message>
        <source>Allows you to select a shape for the block. The selected shape will be used as:</source>
        <translation>Позволяет выбрать форму блока. Выбранная форма будет использоваться в качестве:</translation>
    </message>
    <message>
        <source>a fusion mask for the images and the videos.</source>
        <translation>маски слияния для изображений и видео.</translation>
    </message>
    <message>
        <source>A cutting zone for texts</source>
        <translation>зоны обрезки для текстов</translation>
    </message>
    <message>
        <source>Opacity</source>
        <translation>Непрозрачность</translation>
    </message>
    <message>
        <source>Defines the opacity of the block. This value also applies to the text of the block.</source>
        <translation>Определить непрозрачность блока. Это значение также применяется к тексту блока.</translation>
    </message>
    <message>
        <source>Border</source>
        <translation>Граница</translation>
    </message>
    <message>
        <source>Thickness of the border</source>
        <translation>Толщина границы</translation>
    </message>
    <message>
        <source>Defines the thickness of the border (This value is defined as 1/1080 of the height of the screen. A value of 10 corresponds to 10 points on a 1920x1080 FullHD screen, but only to 6 points on a 1280x720 screen).</source>
        <translation>Определить толщину границы. (Это значение определяется как 1/1080 от высоты экрана. Значению 10 соответствует 10 точек на 1920 × 1080 FullHD экране и только 6 точек на 1280 × 720 экране).</translation>
    </message>
    <message>
        <source>Border color</source>
        <translation>Цвет границы</translation>
    </message>
    <message>
        <source>Defines the color of the line to be used to draw the border</source>
        <translation>Выбрать цвет линии границы</translation>
    </message>
    <message>
        <source>Line type of border</source>
        <translation>Тип линии границы</translation>
    </message>
    <message>
        <source>Defines the type of line (solid, dotted line, etc.)</source>
        <translation>Выбрать тип линии (сплошная, пунктирная и т.д.)</translation>
    </message>
    <message>
        <source>Shadow</source>
        <translation>Тень</translation>
    </message>
    <message>
        <source>Shadow position</source>
        <translation>Положение тени</translation>
    </message>
    <message>
        <source>Defines in which corner the shadow will be positioned (Note: the position of the shadow is independent of rotation of the block: the right lower corner is always the right lower corner, whatever rotation is applied).</source>
        <translation>Определить в каком углу будет располагаться тень (Примечание: положение тени не зависит от вращения блока: правый нижний угол - это всегда правый нижний угол, независимо от поворота).</translation>
    </message>
    <message>
        <source>Distance of the shadow</source>
        <translation>Расстояние до тени</translation>
    </message>
    <message>
        <source>Defines the distance between the block and its shadow</source>
        <translation>Определяет расстояние между блоком и его тенью</translation>
    </message>
    <message>
        <source>Color</source>
        <translation>Цвет</translation>
    </message>
    <message>
        <source>Sets the color used to draw the shadow</source>
        <translation>Определить цвет тени</translation>
    </message>
    <message>
        <source>See also</source>
        <translation>Смотрите также</translation>
    </message>
    <message>
        <source>Description of EXIF - Exchangeable image file format</source>
        <translation>Описание EXIF - Exchangeable image file format</translation>
    </message>
    <message>
        <source>On the left: The &lt;a href=&quot;#InteractiveZone&quot;&gt;Interactive&lt;/a&gt; zone allows you to graphically modify the blocks.</source>
        <translation>Слева: &lt;a href=&quot;#InteractiveZone&quot;&gt;интерактивная область&lt;/a&gt;, позволяющая изменять блоки в графическом режиме.</translation>
    </message>
</context>
<context>
    <name>0118</name>
    <message>
        <source>Set first shot duration for a set of slides</source>
        <translation>Выбор продолжительности первого кадра для группы слайдов</translation>
    </message>
    <message>
        <source>First shot duration</source>
        <translation>Продолжительность первого кадра</translation>
    </message>
    <message>
        <source>Define the duration of the first shot.</source>
        <translation>Определяет продолжительность первого кадра.</translation>
    </message>
    <message>
        <source>When you click the OK button, the new duration is applied to all the slides that were selected. </source>
        <translation>После нажатия кнопки ОК новая продолжительность будет применена ко всем выделенным слайдам.</translation>
    </message>
    <message>
        <source>This new duration affects only the first shot of each slide</source>
        <translation>Новая продолжительность применяется только к первому кадру каждого слайда</translation>
    </message>
    <message>
        <source>This new duration is applied only to standard slides. The predefined title slides are not impacted.</source>
        <translation>Новая продолжительность применяется только к обычным слайдам. Она не влияет на слайды - шаблоны заголовков.</translation>
    </message>
    <message>
        <source>This dialog allows you to define the duration of the fist shot of a set of slides:</source>
        <translation>Это диалоговое окно позволяет определить продолжительность первого кадра для группы слайдов:</translation>
    </message>
</context>
<context>
    <name>0119</name>
    <message>
        <source>Slide properties</source>
        <translation>Параметры слайда</translation>
    </message>
    <message>
        <source>Remarks: </source>
        <translation>Примечания: </translation>
    </message>
    <message>
        <source>Toolbar</source>
        <translation>Панель инструментов</translation>
    </message>
    <message>
        <source>Slide settings zone</source>
        <translation>Область параметров слайда</translation>
    </message>
    <message>
        <source>Shots table</source>
        <translation>Таблица кадров</translation>
    </message>
    <message>
        <source>Blocks table</source>
        <translation>Таблица блоков</translation>
    </message>
    <message>
        <source>Shot settings zone</source>
        <translation>Область параметров кадра</translation>
    </message>
    <message>
        <source>Interactive zone</source>
        <translation>Интерактивная область</translation>
    </message>
    <message>
        <source>Block settings zone</source>
        <translation>Область параметров блока</translation>
    </message>
    <message>
        <source> The toolbar allows to launch the main slide editing commands. </source>
        <translation> Панель инструментов позволяет запускать основные команды редактирования слайдов. </translation>
    </message>
    <message>
        <source>Append a shot to the end of the shot table</source>
        <translation>Добавить кадр в конец таблицы кадров</translation>
    </message>
    <message>
        <source>Remove current selected shot</source>
        <translation>Удалить выбранный кадр</translation>
    </message>
    <message>
        <source>Change the order of the shots by moving the current selected shot a step to the left</source>
        <translation>Изменить порядок кадров перемещением данного кадра на шаг влево</translation>
    </message>
    <message>
        <source>Change the order of the shots by moving the current selected shot a step to the right</source>
        <translation>Изменить порядок кадров перемещением данного кадра на шаг вправо</translation>
    </message>
    <message>
        <source>Copy the current block to the ffDiaporama clipboard and remove it from the slide. The copy is made with the block parameters defined for the current selected shot.</source>
        <translation>Скопировать текущий блок в буфер обмена ffDiaporama и удалить со слайда. Также копируются параметры блока, определенные для текущего кадра.</translation>
    </message>
    <message>
        <source>Copy the current block to the ffDiaporama clipboard. The copy is made with the block parameters defined for the current selected shot.</source>
        <translation>Скопировать текущий блок в буфер обмена ffDiaporama. Также копируются параметры блока, определенные для текущего кадра.</translation>
    </message>
    <message>
        <source>Remove the current block</source>
        <translation>Удалить текущий блок</translation>
    </message>
    <message>
        <source>Change the order of blocks by moving the active block upward (towards the background)</source>
        <translation>Изменить порядок блоков перемещением активного блока вверх (на задний план)</translation>
    </message>
    <message>
        <source>Change the order of blocks by moving the active block downward (towards the foreground)</source>
        <translation>Изменить порядок блоков перемещением активного блока вниз (на передний план)</translation>
    </message>
    <message>
        <source>Make the active block visible or hidden. Note: Hidden video blocks are automatically paused</source>
        <translation>Сделать активный блок видимым или скрытым. Примечание: скрытые видео блоки автоматически приостанавливаются</translation>
    </message>
    <message>
        <source>Play the sound, during this shot, of the selected video block. (This button is active only for videos.)</source>
        <translation>Воспроизвести звук выбранного видео блока в течение этого кадра. (Эта функция активна только для видео.)</translation>
    </message>
    <message>
        <source>Open the &lt;a href=&quot;0110.html&quot;&gt;Image framing and correction dialog&lt;/a&gt;. This button is active only for objects containing images or videos.</source>
        <translation>Открыть диалоговое окно &lt;a href=&quot;0110.html&quot;&gt;Кадрирование и коррекция изображения&lt;/a&gt;. Эта функция активна только для объектов, содержащих изображения или видео.</translation>
    </message>
    <message>
        <source>Display information on active block. (Remark: This function is available only for &quot;image&quot; or &quot;video&quot; blocks.)</source>
        <translation>Показать информацию об активном блоке. (Примечание: эта функция доступна только для блоков изображений или видео.)</translation>
    </message>
    <message>
        <source>Align to top</source>
        <translation>Выровнять по верху</translation>
    </message>
    <message>
        <source>Align to midle</source>
        <translation>Выровнять по середине</translation>
    </message>
    <message>
        <source>Align to bottom</source>
        <translation>Выровнять по низу</translation>
    </message>
    <message>
        <source>Align to left</source>
        <translation>Выровнять по левому краю</translation>
    </message>
    <message>
        <source>Align to center</source>
        <translation>Выровнять по центру</translation>
    </message>
    <message>
        <source>Align to right</source>
        <translation>Выровнять по правому краю</translation>
    </message>
    <message>
        <source>Distribute horizontally</source>
        <translation>Распределить горизонтально</translation>
    </message>
    <message>
        <source>Distribute vertically</source>
        <translation>Распределить вертикально</translation>
    </message>
    <message>
        <source>Name of the slide</source>
        <translation>Имя слайда</translation>
    </message>
    <message>
        <source>Indicate here a name for the slide. It is this name which will appear on the thumbnail in the main window timeline.</source>
        <translation>Укажите здесь название слайда. Это то название, которое будет отображено в миниатюре на линии времени главного окна.</translation>
    </message>
    <message>
        <source>Total slide duration</source>
        <translation>Общая продолжительность слайда</translation>
    </message>
    <message>
        <source>The total slide duration is displayed here. This duration takes into account possible adjustments for minimal duration of the shot as described above.</source>
        <translation>Здесь отображается общая продолжительность слайда. С учетом возможных корректировок минимальной длительности кадра, как указано выше.</translation>
    </message>
    <message>
        <source> The shots table shows the shots as thumbnails, in the order in which they will be played (from left to right). </source>
        <translation> Таблица кадров показывает миниатюры кадров в том порядке, в котором они будут воспроизводиться (слева направо). </translation>
    </message>
    <message>
        <source>For each shot, the thumbnail shows: </source>
        <translation>Для каждого кадра миниатюра показывает: </translation>
    </message>
    <message>
        <source>The shot duration (At the top of the thumbnail)</source>
        <translation>Продолжительность кадра (вверху миниатюры)</translation>
    </message>
    <message>
        <source>The temporal position of the shot at the end of its duration (At the bottom right of the thumbnail)</source>
        <translation>Временное положение кадра в конце его продолжительности (внизу справа миниатюры)</translation>
    </message>
    <message>
        <source>An image representing the shot at the end of its duration</source>
        <translation>Изображение, представляющее кадр, в конце его продолжительности</translation>
    </message>
    <message>
        <source>Remark:</source>
        <translation>Примечание:</translation>
    </message>
    <message>
        <source>The order of the shots can be changed by using Drag &amp; Drop.</source>
        <translation>Порядок кадров может быть изменен с помощью перетаскивания.</translation>
    </message>
    <message>
        <source>Shot duration</source>
        <translation>Продолжительность кадра</translation>
    </message>
    <message>
        <source> Indicate here the duration of the currently selected shot. For the last shot of the slide, there is a minimum duration.The following rules are used to calculate the minimum duration of the shot: </source>
        <translation>Укажите здесь продолжительность выбранного кадра. Для последнего кадра слайда, есть минимальная продолжительность. Следующие правила используются при расчете минимальной продолжительности кадра: </translation>
    </message>
    <message>
        <source>The total slide duration cannot be lower than the sum of the durations of the entering transition of the slide plus that of the transition to the following slide</source>
        <translation>Общая продолжительность слайда не может быть меньше, чем сумма длительностей входящего перехода слайда и перехода на следующий слайд</translation>
    </message>
    <message>
        <source>The total slide duration must permit complete play of the longest video sequence (time of breaks is taken into account)</source>
        <translation>Общая продолжительность слайда должна допускать полное воспроизведение самого длинного видеоряда (время перерывов учитывается)</translation>
    </message>
    <message>
        <source>The total slide duration cannot be lower than 1:30 second</source>
        <translation>Общая продолжительность слайд не может быть меньше, чем 1/30 секунды</translation>
    </message>
    <message>
        <source> The interactive zone allows you to move and interactively re-size blocks within the selected shot. </source>
        <translation> Интерактивная область позволяет перемещать и изменять размеры блоков в пределах выбранного кадра в интерактивном режиме. </translation>
    </message>
    <message>
        <source>Selected blocks are shown with a frame. (It allows to differentiate them from other graphic elements of the slide).</source>
        <translation>Выделенные блоки показаны с рамкой. (Это позволяет отличать их от других графических элементов слайда).</translation>
    </message>
    <message>
        <source>Control handles (small square) are shown on sides and on corners of the selection frame.</source>
        <translation>Маркеры управления (небольшие квадратики) показаны по бокам и в углах рамки выделения.</translation>
    </message>
    <message>
        <source>Rulers are displayed to facilitate the work with the mouse. See &lt;a href=&quot;0116.html&quot;&gt;Rulers settings&lt;/a&gt;</source>
        <translation>Линейки отображаются для облегчения работы с  мышью. Смотрите &lt;a href=&quot;0116.html&quot;&gt;Свойства линеек&lt;/a&gt;</translation>
    </message>
    <message>
        <source>Using the mouse:</source>
        <translation> Использование мыши:</translation>
    </message>
    <message>
        <source>To select a block: click the block</source>
        <translation>Чтобы выбрать блок: нажмите на него</translation>
    </message>
    <message>
        <source>To select multiple blocks: Select a first block by clicking on it and then, by clicking on the other blocks to be selected with pressing either the SHIFT or the CTRL key.</source>
        <translation>Чтобы выделить несколько блоков: выберите первый блок, нажав на него, а затем, нажмите на другие блоки, зажав клавишу SHIFT или CTRL.</translation>
    </message>
    <message>
        <source>To select a block under another block : Click the block to be selected by pushing both SHIFT and CTRL keys.</source>
        <translation>Чтобы выбрать блок под другим блоком: нажмите на блок, который будет выбран, зажав обе клавиши SHIFT и CTRL.</translation>
    </message>
    <message>
        <source>To unselect a block in a multiple selection: Click the block with pressing either the SHIFT or the CTRL key.</source>
        <translation>Чтобы снять выделение с одного из блоков: нажмите на блок, зажав клавишу SHIFT или CTRL.</translation>
    </message>
    <message>
        <source>To modify the size of the blocks of the selection: Click one of the handles of the selection and, while keeping the button of the mouse pressed, move the mouse.</source>
        <translation>Чтобы изменить размер выделенного блока: нажмите на один из маркеров управления и, не отпуская кнопку мыши, переместите мышь.</translation>
    </message>
    <message>
        <source>To move the blocks of the selection: Click one of the blocks of the selection and, while keeping the button of the mouse pressed, move the mouse.</source>
        <translation>Чтобы переместить выделенный блок: нажмите на один из выбранных блоков и, не отпуская кнопку мыши, переместите мышь.</translation>
    </message>
    <message>
        <source>Using the keyboard:</source>
        <translation>Использование клавиатуры:</translation>
    </message>
    <message>
        <source>To move the blocks of the selection, use the arrow keys.</source>
        <translation>Чтобы переместить выделенный блок, используйте клавиши со стрелками.</translation>
    </message>
    <message>
        <source>To change the size of the blocks of the selection, use SHIFT+arrows to move the upper left corner handle or CTRL+arrows to move the lower right corner handle.</source>
        <translation>Чтобы изменить размер выделенного блока, воспользуйтесь сочетанием клавиш SHIFT + стрелки для перемещения к верхнему левому углу или CTRL + стрелки для перемещения к нижнему правом углу.</translation>
    </message>
    <message>
        <source>Remarks:</source>
        <translation>Примечания:</translation>
    </message>
    <message>
        <source>A double click on a block opens the block editor associated with the block type (for a text block this will be the text editor, for an image block the reframing dialog, etc.)</source>
        <translation>Двойной щелчок на блоке открывает редактор блоков, связанный с этим типом блока (для текстового блока - это текстовый редактор, для блока изображения - диалог кадрирования и т.д.)</translation>
    </message>
    <message>
        <source>A right click on a block when the selection includes only a single block opens a contextual menu proposing the editing commands for a block.</source>
        <translation>Щелчок правой кнопкой мыши на блоке, когда выделен только один блок, открывает контекстное меню, предлагающее ряд команд редактирования блока.</translation>
    </message>
    <message>
        <source>A right click on a block when the selection includes multiple blocks opens a contextual menu proposing the editing commands for multiple blocks.</source>
        <translation>Щелчок правой кнопкой мыши на блоке, когда выделено несколько блоков, открывает контекстное меню, предлагающее ряд команд редактирования нескольких блоков.</translation>
    </message>
    <message>
        <source>The order of the blocks is important! The first block (at the top of the list) is covered by the second block which is even covered by the following block and so on.</source>
        <translation>Порядок блоков важен! Первый блок (вверху списка) находится под  вторым блоком, который перекрыт следующим блоком и так далее.</translation>
    </message>
    <message>
        <source>The order of the blocks is defined shot by shot.</source>
        <translation>Порядок блоков определяется кадр за кадром.</translation>
    </message>
    <message>
        <source>The first column contains or: </source>
        <translation>Первый столбец содержит или:</translation>
    </message>
    <message>
        <source> If the block is a title.</source>
        <translation> если блок является текстовым.</translation>
    </message>
    <message>
        <source>A thumbnail if the block is an image or a video.</source>
        <translation>Миниатюру, если блок является изображением или видео.</translation>
    </message>
    <message>
        <source> If the image or the video have a transformation filter.</source>
        <translation> если изображение или видео содержат фильтр трансформации.</translation>
    </message>
    <message>
        <source>The second column contains icons giving the state of the blocks for the current shot: </source>
        <translation>Второй столбец содержит значки, показывающие состояние блока в текущем кадре:</translation>
    </message>
    <message>
        <source> If the video has the sound during this shot. This information appears only for the video blocks.</source>
        <translation>если видео на этом кадре имеет звук. Эта информация отображается только для блоков видео.</translation>
    </message>
    <message>
        <source>The third column indicates: </source>
        <translation>Третий столбец содержит: </translation>
    </message>
    <message>
        <source>If the block is a title: the text of the block</source>
        <translation>Если блок текстовый: текст блока</translation>
    </message>
    <message>
        <source>If the block is an image: </source>
        <translation>Если блок изображения: </translation>
    </message>
    <message>
        <source>The filename.</source>
        <translation>Имя файла.</translation>
    </message>
    <message>
        <source>The width x the height of the image in pixel (the format of the image - the geometry of the image).</source>
        <translation>Ширина x высота изображения в пикселях (формат изображения - геометрия изображения).</translation>
    </message>
    <message>
        <source>A summary of EXIF information on the image.</source>
        <translation>Общая EXIF информация об изображении.</translation>
    </message>
    <message>
        <source>If the block is a video: </source>
        <translation>Если это блок видео:</translation>
    </message>
    <message>
        <source>The duration of the video.</source>
        <translation>Продолжительность видео.</translation>
    </message>
    <message>
        <source>Double clicking on a block opens the block editor associated with the block type (for a text block this will be the text editor, for an image block the reframing dialog, etc.)</source>
        <translation>Двойной щелчок на блоке открывает редактор блоков, связанный с этим типом блока (для текстового блока - это текстовый редактор, для блока изображения - диалог кадрирования и т.д.)</translation>
    </message>
    <message>
        <source>Right clicking on a block when the selection includes only a single block opens a contextual menu proposing the editing commands for a block.</source>
        <translation>Щелчок правой кнопкой мыши на блоке, когда выделен только один блок, открывает контекстное меню, предлагающее ряд команд редактирования блока.</translation>
    </message>
    <message>
        <source>Right clicking on a block when the selection includes multiple blocks opens a contextual menu proposing the editing commands for multiple blocks.</source>
        <translation>Щелчок правой кнопкой мыши на блоке, когда выделено несколько блоков, открывает контекстное меню, предлагающее ряд команд редактирования нескольких блоков.</translation>
    </message>
    <message>
        <source>Blocks with locked properties are shown on a grey bottom.</source>
        <translation>Блоки с заблокированными свойствами показаны в сером цвете.</translation>
    </message>
    <message>
        <source>Selected blocks are shown on a red bottom if the focus is on the blocks table or on a blue bottom if the focus is on another element.</source>
        <translation>Выбранные блоки отображаются в красном цвете, если акцент делается на таблице блоков, или в синем цвете, если акцент делается на другом элементе.</translation>
    </message>
    <message>
        <source>To change the blocks order, use Drag &amp; Drop or &lt;B&gt;Up&lt;/B&gt; and &lt;B&gt;Down&lt;/B&gt; functions of the contextual menu.</source>
        <translation>Чтобы изменить порядок блоков, используйте перетаскивание или функции &lt;B&gt;Вверх&lt;/B&gt; и &lt;B&gt;Вниз&lt;/B&gt; контекстного меню.</translation>
    </message>
    <message>
        <source>It is possible to add files directly in the blocks table by using Drag and Drop with the file explorer.</source>
        <translation>Можно добавить файлы непосредственно в таблицу блоков с помощью перетаскивания из менеджера файлов (Проводника).</translation>
    </message>
    <message>
        <source>All blocks, whether title, image or video, possess a text element.</source>
        <translation>Все блоки, будь то заголовок, изображение или видео, могут иметь текстовый элемент.</translation>
    </message>
    <message>
        <source>During the insertion of a new block (Add title, Add file or Paste), the block is inserted: </source>
        <translation>Во время вставки нового блока (Добавить текст, Добавить файл или Вставить) он вставляется: </translation>
    </message>
    <message>
        <source>In visible mode for the current shot and for all the following shots</source>
        <translation>в режиме видимости для текущего кадра и для всех последующих кадров</translation>
    </message>
    <message>
        <source>In hidden mode for the shots located before the current shot</source>
        <translation>в скрытом режиме для кадров, расположенных перед текущим кадром</translation>
    </message>
    <message>
        <source>Always in the last position in the list of blocks (in the foreground)</source>
        <translation>всегда на последнем месте в таблице блоков (на переднем плане)</translation>
    </message>
    <message>
        <source>Coordinates</source>
        <translation>Координаты</translation>
    </message>
    <message>
        <source>&lt;B&gt;For image or video blocks: &lt;/B&gt;Allows you to select a reframing style for the image. It has the same effect as selecting a style in the dialog: &lt;a href=&quot;0110.html&quot;&gt;Correct, reframe or cut image or video&lt;/a&gt;.</source>
        <translation>&lt;B&gt;Для блоков изображений и видео: &lt;/B&gt;позволяет выбрать стиль обрезки изображения. Имеет такой же эффект как выбор стиля в диалоговом окне: &lt;a href=&quot;0110.html&quot;&gt;Коррекция, кадрирование или обрезка изображения или видео&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>&lt;B&gt;For text blocks: &lt;/B&gt;Allows you to select the geometrical constraints to be applied to the block. Three type of constraint are available:</source>
        <translation>&lt;B&gt;Для блоков текста: &lt;/B&gt;позволяет выбрать ограничения геометрии, применяемые к блоку. Доступно три типа ограничений:</translation>
    </message>
    <message>
        <source>No constraint is applied to the selection rectangle.</source>
        <translation>К прямоугольнику выделения не применяются ограничения.</translation>
    </message>
    <message>
        <source>Lock selection rectangle to the actual geometry. It has no meaning until you have defined a shape in &quot;no constraint&quot; mode.</source>
        <translation>Прямоугольник выделения будет той же геометрии, что и в настоящее время. Не имеет смысла до тех пор, пока не будет определена форма в режиме &quot;Без ограничений&quot;.</translation>
    </message>
    <message>
        <source>Lock selection rectangle to the same geometry as the project, such that, if you place the image in full screen, the reframed part will correspond to the whole screen.</source>
        <translation>Прямоугольник выделение будет той же геометрии, что и сам проект. Если вы откроете изображение в полноэкранном режиме, то выбранная часть будет соответствовать всему экрану.</translation>
    </message>
    <message>
        <source>Allows you to select a pre-defined block size</source>
        <translation>Позволяет выбрать заранее определенный размер блока</translation>
    </message>
    <message>
        <source>Represents the horizontal offset of the block from the left. This position is defined as a percentage (%) of the total width of the image or in pixels (for a 1080p screen) according to the unit defined in the configuration dialog.</source>
        <translation>Горизонтальное смещение блока с левой стороны. Определяется как процент (%) от общей ширины изображения или в пикселях (на экране 1080) в соответствии с единицами измерения, заданными в диалоге конфигурации.</translation>
    </message>
    <message>
        <source>Represents the vertical offset of the block from the top. This position is defined as a percentage (%) of the total height of the image or in pixels (for a 1080p screen) according to the unit defined in the configuration dialog.</source>
        <translation>Вертикальное смещение блока сверху. Определяется как процент (%) от общей высоты изображения или в пикселях (на экране 1080) в соответствии с единицами измерения, заданными в диалоге конфигурации.</translation>
    </message>
    <message>
        <source>Represents the width of the block. This value is defined as a percentage (%) of the total width of the image or in pixels (for a 1080p screen) according to the unit defined in the configuration dialog box.</source>
        <translation>Ширина блока. Определяется как процент (%) от общей ширины изображения или в пикселях (на экране 1080) в соответствии с единицами измерения, заданными в диалоге конфигурации.</translation>
    </message>
    <message>
        <source>Represents the height of the block. This value is defined as a percentage (%) of the total height of the image or in pixels (for a 1080p screen) according to the unit defined in the configuration dialog.</source>
        <translation>Высота блока. Определяется как процент (%) от общей высоты изображения или в пикселях (на экране 1080) в соответствии с единицами измерения, заданными в диалоге конфигурации.</translation>
    </message>
    <message>
        <source>Rotation around the Z axis in degrees.</source>
        <translation>Вращение вокруг оси Z в градусах.</translation>
    </message>
    <message>
        <source>Rotation around the Y axis in degrees.</source>
        <translation>Вращение вокруг оси Y в градусах.</translation>
    </message>
    <message>
        <source>Rotation around the X axis in degrees.</source>
        <translation>Вращение вокруг оси X в градусах.</translation>
    </message>
    <message>
        <source>Block shape</source>
        <translation>Форма блока</translation>
    </message>
    <message>
        <source>Shape</source>
        <translation>Форма</translation>
    </message>
    <message>
        <source>Allows you to select a shape for the block. The selected shape will be used as:</source>
        <translation>Позволяет выбрать форму блока. Выбранная форма будет использоваться в качестве:</translation>
    </message>
    <message>
        <source>a fusion mask for the images and the videos.</source>
        <translation>маски слияния для изображений и видео.</translation>
    </message>
    <message>
        <source>A cutting zone for texts</source>
        <translation>зоны обрезки для текстов</translation>
    </message>
    <message>
        <source>Opacity</source>
        <translation>Непрозрачность</translation>
    </message>
    <message>
        <source>Defines the opacity of the block. This value also applies to the text of the block.</source>
        <translation>Определить непрозрачность блока. Это значение также применяется к тексту блока.</translation>
    </message>
    <message>
        <source>Border</source>
        <translation>Граница</translation>
    </message>
    <message>
        <source>Thickness of the border</source>
        <translation>Толщина границы</translation>
    </message>
    <message>
        <source>Defines the thickness of the border (This value is defined as 1/1080 of the height of the screen. A value of 10 corresponds to 10 points on a 1920x1080 FullHD screen, but only to 6 points on a 1280x720 screen).</source>
        <translation>Определить толщину границы. (Это значение определяется как 1/1080 от высоты экрана. Значению 10 соответствует 10 точек на 1920 × 1080 FullHD экране и только 6 точек на 1280 × 720 экране).</translation>
    </message>
    <message>
        <source>Border color</source>
        <translation>Цвет границы</translation>
    </message>
    <message>
        <source>Defines the color of the line to be used to draw the border</source>
        <translation>Выбрать цвет линии границы</translation>
    </message>
    <message>
        <source>Line type of border</source>
        <translation>Тип линии границы</translation>
    </message>
    <message>
        <source>Defines the type of line (solid, dotted line, etc.)</source>
        <translation>Выбрать тип линии (сплошная, пунктирная и т.д.)</translation>
    </message>
    <message>
        <source>Shadow</source>
        <translation>Тень</translation>
    </message>
    <message>
        <source>Shadow position</source>
        <translation>Положение тени</translation>
    </message>
    <message>
        <source>Defines in which corner the shadow will be positioned (Note: the position of the shadow is independent of rotation of the block: the right lower corner is always the right lower corner, whatever rotation is applied).</source>
        <translation>Определить в каком углу будет располагаться тень (Примечание: положение тени не зависит от вращения блока: правый нижний угол - это всегда правый нижний угол, независимо от поворота).</translation>
    </message>
    <message>
        <source>Distance of the shadow</source>
        <translation>Расстояние до тени</translation>
    </message>
    <message>
        <source>Defines the distance between the block and its shadow</source>
        <translation>Определяет расстояние между блоком и его тенью</translation>
    </message>
    <message>
        <source>Color</source>
        <translation>Цвет</translation>
    </message>
    <message>
        <source>Animation option</source>
        <translation>Настройки анимации</translation>
    </message>
    <message>
        <source>Speed wave</source>
        <translation>Скорость</translation>
    </message>
    <message>
        <source>Text annimation</source>
        <translation>Анимация текста</translation>
    </message>
    <message>
        <source>Zoom</source>
        <translation>Масштаб</translation>
    </message>
    <message>
        <source>Defines a level of zoom for the text</source>
        <translation>Определить значение масштабирования текста</translation>
    </message>
    <message>
        <source>Defines the horizontal position of the text inside the block</source>
        <translation>Определить горизонтальное положение текста внутри блока</translation>
    </message>
    <message>
        <source>Defines the vertical position of the text inside the block</source>
        <translation>Определить вертикальное положение текста внутри блока</translation>
    </message>
    <message>
        <source>Define values for zoom and scrolling for the 1st shot</source>
        <translation>Определить значение масштабирования и прокрутки для 1-го кадра</translation>
    </message>
    <message>
        <source>Define different values for zoom and scrolling for the 2nd</source>
        <translation>Определить другие значения масштабирования и прокрутки для 2-го кадра</translation>
    </message>
    <message>
        <source>Block animation</source>
        <translation>Анимация блока</translation>
    </message>
    <message>
        <source>Multiple rotations</source>
        <translation>Несколько поворотов</translation>
    </message>
    <message>
        <source> This animation allows to turn a block several times during the shot. </source>
        <translation>Эта анимация позволяет повернуть блок несколько раз за время кадра. </translation>
    </message>
    <message>
        <source>Remark: the rotation direction is defined by the sign, so +5 will give 5 rotations in one direction while -5 will give 5 rotations in the other direction </source>
        <translation>Примечание: направление вращения определяется знаком, так +5 даст 5 оборотов в одном направлении, в то время как -5 даст 5 оборотов в другом направлении</translation>
    </message>
    <message>
        <source>Defines the number of rotation to be made according to the Z axis.</source>
        <translation>Задать количество оборотов, которое будет сделано вокруг оси Z.</translation>
    </message>
    <message>
        <source>Defines the number of rotation to be made according to the Y axis.</source>
        <translation>Задать количество оборотов, которое будет сделано вокруг оси Y.</translation>
    </message>
    <message>
        <source>Defines the number of rotation to be made according to the X axis.</source>
        <translation>Задать количество оборотов, которое будет сделано вокруг оси X.</translation>
    </message>
    <message>
        <source>Dissolve</source>
        <translation>Растворение</translation>
    </message>
    <message>
        <source>This animation dissolves between the block and a transparent zone according to the following settings.</source>
        <translation>Эта анимация позволяет осуществить плавный переход между блоком и прозрачной областью согласно следующим параметрам.</translation>
    </message>
    <message>
        <source>Appear</source>
        <translation>Появление</translation>
    </message>
    <message>
        <source>The block will appear during the shot</source>
        <translation>Блок появится во время кадра</translation>
    </message>
    <message>
        <source>Disappear</source>
        <translation>Исчезновение</translation>
    </message>
    <message>
        <source>The block will disappear during the shot</source>
        <translation>Блок исчезнет во время кадра</translation>
    </message>
    <message>
        <source>Blink</source>
        <translation>Мигание</translation>
    </message>
    <message>
        <source>The block will blink during the shot (appear then disappear). 4 speeds are proposed (from slow to very fast).</source>
        <translation>Блок будет мигать во время кадра (появился, исчез). Доступно 4 скорости (от медленной до очень быстрой).</translation>
    </message>
    <message>
        <source>See also</source>
        <translation>Смотрите также</translation>
    </message>
    <message>
        <source>Description of EXIF - Exchangeable image file format</source>
        <translation>Описание EXIF - Exchangeable image file format</translation>
    </message>
    <message>
        <source>This settings group defines the coordinates of the block for the current shot, so, the modifications made to the following properties will apply only to current shot. To understand the differences between the properties which apply to all shots and those which apply only to the current shot, consult: &lt;a href=&quot;0010.html&quot;&gt;How ffDiaporama works&lt;/a&gt;.</source>
        <translation>Это группа настроек, определяющая координаты блока текущего кадра, т.е. изменения свойств будут применены только к текущему кадру. Для понимания разницы между свойствами, которые применяются ко всем кадрам, и свойствами, которые применяются только к текущему кадру, смотрите &lt;a href=&quot;0010.html&quot;&gt;Принципы работы ffDiaporama&lt;/a&gt;.</translation>
    </message>
    <message>
        <source> This settings group defines the shape of the block for all shots, so, modification of the following properties will apply to all shots in the slide. To understand the differences between the properties which apply to all shots and those which apply only to the current shot, consult: &lt;a href=&quot;0010.html&quot;&gt;How ffDiaporama works&lt;/a&gt;. </source>
        <translation>Это группа настроек, определяющая форму блока всех кадров, т.е. изменения свойств будут применены ко всем кадрам слайда. Для понимания разницы между свойствами, которые применяются ко всем кадрам, и свойствами, которые применяются только к текущему кадру, смотрите &lt;a href=&quot;0010.html&quot;&gt;Принципы работы ffDiaporama&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>On the top: The &lt;a href=&quot;#Toolbar&quot;&gt;Toolbar&lt;/a&gt; allows to launch the main slide editing commands, and the &lt;a href=&quot;#ShotSettings&quot;&gt;Shot settings&lt;/a&gt; zone.</source>
        <translation>Сверху: &lt;a href=&quot;#Toolbar&quot;&gt;Панель инструментов&lt;/a&gt;, позволяющая запускать основные команды редактирования слайдов, и область &lt;a href=&quot;#ShotSettings&quot;&gt;параметров кадров&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>On the left: The &lt;a href=&quot;#SlideSettings&quot;&gt;Slide settings zone&lt;/a&gt;, the &lt;a href=&quot;#ShotsTable&quot;&gt;Shots table&lt;/a&gt; and the &lt;a href=&quot;#InteractiveZone&quot;&gt;Interactive&lt;/a&gt; zones.</source>
        <translation>Слева: область &lt;a href=&quot;#SlideSettings&quot;&gt;параметров слайдов&lt;/a&gt;, &lt;a href=&quot;#ShotsTable&quot;&gt;таблица кадров&lt;/a&gt; и &lt;a href=&quot;#InteractiveZone&quot;&gt;интерактивная область&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>On the right: The &lt;a href=&quot;#BlockTable&quot;&gt;Blocks table&lt;/a&gt; and the &lt;a href=&quot;#BlockSettings&quot;&gt;Block settings&lt;/a&gt; zones.</source>
        <translation>Справа: &lt;a href=&quot;#BlockTable&quot;&gt;таблица блоков&lt;/a&gt; и область &lt;a href=&quot;#BlockSettings&quot;&gt;параметров блоков&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>Open the &lt;a href=&quot;0120.html&quot;&gt;Edit text block dialog&lt;/a&gt;.</source>
        <translation>Открывает диалоговое окно &lt;a href=&quot;0120.html&quot;&gt;Редактировать текст блока&lt;/a&gt;.</translation>
    </message>
    <message>
        <source> If the block is visible during this shot.</source>
        <translation> Если блок видим во время кадра.</translation>
    </message>
    <message>
        <source> If the block is hidden during this shot.</source>
        <translation> Если блок скрыт во время кадра.</translation>
    </message>
    <message>
        <source>Sets the color used to draw the shadow</source>
        <translation>Определить цвет тени</translation>
    </message>
    <message>
        <source>If you specify a duration lower than the minimum calculated duration for the shot, it is this minimum duration that will be used in place of the value which you specified.</source>
        <translation>Если указанная продолжительностью меньше минимальной продолжительности кадра, то будет использоваться минимальная продолжительность, а не то значение, которое вы указали.</translation>
    </message>
    <message>
        <source>Blocks are shown on 3 columns:</source>
        <translation>Блоки показаны в 3 столбца:</translation>
    </message>
    <message>
        <source>The blocks table lists, from top to bottom, the present blocks in the slide.</source>
        <translation>Таблица блоков представляет собой список блоков слайда сверху вниз.</translation>
    </message>
    <message>
        <source>To make animations of text, you have to create at least 2 shots then:</source>
        <translation>Чтобы получить анимацию текста, вы должны создать как минимум 2 кадра:</translation>
    </message>
    <message>
        <source>This dialog allows you to define settings for the slides. It includes numerous zones:</source>
        <translation>Это диалоговое окно позволяет определить параметры слайдов. Оно включает множество областей:</translation>
    </message>
    <message>
        <source>Open the &lt;a href=&quot;0105.html&quot;&gt;Chapter properties dialog&lt;/a&gt;</source>
        <translation>Открыть диалоговое окно &lt;a href=&quot;0105.html&quot;&gt;Свойства главы&lt;/a&gt;</translation>
    </message>
    <message>
        <source>Add a new title block - Open a sub menu with the following options: </source>
        <translation>Добавить текст - откроется подменю со следующими параметрами: </translation>
    </message>
    <message>
        <source>Add a simple title block</source>
        <translation>Добавить простой блок текста</translation>
    </message>
    <message>
        <source>Add a title clip-art block</source>
        <translation>Добавить клипарт блок текста</translation>
    </message>
    <message>
        <source>Once you have selected one of the options, the &lt;a href=&quot;0120.html&quot;&gt;Edit Text dialog&lt;/a&gt; opens.</source>
        <translation>После того как вы выбрали один из вариантов, откроется диалоговое окно &lt;a href=&quot;0120.html&quot;&gt; Редактировать текст&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>Add one or several new blocks of images or video. A &lt;a href=&quot;0109.html&quot;&gt;file selection dialog&lt;/a&gt; appears allowing you to select files. </source>
        <translation>Добавить один или несколько новых блоков изображений или видео. Появится диалоговое окно &lt;a href=&quot;0109.html&quot;&gt;выбора файла&lt;/a&gt;, позволяющий выбрать файлы.</translation>
    </message>
    <message>
        <source>Note: in case of multiple selection, files are added in the alphabetical order of the filenames or in the digital order of shots (according to the option selected in the &lt;a href=&quot;0101.html&quot;&gt;Application options dialog&lt;/a&gt;).</source>
        <translation>Примечание: в случае множественного выбора, файлы добавляются в алфавитном порядке имен файлов или в цифровом порядке кадров (в зависимости от выбранной опции в диалоговом окне &lt;a href=&quot;0101.html&quot;&gt;Настройки программы&lt;/a&gt;).</translation>
    </message>
    <message>
        <source>Edit blocks - Open a sub menu with the following options: </source>
        <translation>Изменить блок - откроется подменю, содержащее следующие параметры: </translation>
    </message>
    <message>
        <source>Arrange blocks - Open a sub menu with the following options: </source>
        <translation>Упорядочить блоки -  откроется подменю со следующими параметрами: </translation>
    </message>
    <message>
        <source>Save as model - Allows you to save current slide as a new Predefined custom title. </source>
        <translation>Сохранить как шаблон - позволяет сохранить текущий слайд как новый пользовательский шаблон заголовка слайда. </translation>
    </message>
    <message>
        <source>For more information on predefined title slide, see: &lt;a href=&quot;0012.html&quot;&gt;Predefined title slide&lt;/a&gt;</source>
        <translation>Для получения дополнительной информации о шаблонах заголовков слайдов, смотрите: &lt;a href=&quot;0012.html&quot;&gt;Шаблон заголовка слайда&lt;/a&gt;</translation>
    </message>
    <message>
        <source> At the bottom of the box, the &quot;Rullers&quot; button allows you to open the &lt;a href=&quot;0116.html&quot;&gt;Ruler properties dialog&lt;/a&gt; </source>
        <translation>В нижней части окна находится кнопка &quot;Линейки&quot;, которая позволяет открыть диалоговое окно &lt;a href=&quot;0116.html&quot;&gt;Свойства линеек&lt;/a&gt; </translation>
    </message>
    <message>
        <source> It is also possible to open contextual menus by: </source>
        <translation>Также можно открыть контекстное меню:</translation>
    </message>
    <message>
        <source>Right clicking on zones.</source>
        <translation>Правым щелчком мыши на области.</translation>
    </message>
    <message>
        <source>Right click on shots table.</source>
        <translation>Правым щелчком мыши на таблице кадров.</translation>
    </message>
    <message>
        <source>Right click on blocks table or on interactive zone when no block was selected.</source>
        <translation>Правым щелчком мыши на таблице блоков или на интерактивной области, когда ни один блок не выделен.</translation>
    </message>
    <message>
        <source>Right click on one of the blocks of a multiple selection, on blocks table or on interactive zone.</source>
        <translation>Правым щелчком мыши на одном из выделенных блоков, на таблице блоков или на интерактивной области.</translation>
    </message>
    <message>
        <source>Each of these contextual menus propose commands which depend on what you have clicked.</source>
        <translation>Каждое из этих контекстных меню предлагает команды, которые зависят от того, что вы нажали.</translation>
    </message>
    <message>
        <source>This settings group deals with style management. For more information on style management, see: &lt;a href=&quot;0016.html&quot;&gt;Using style management&lt;/a&gt;</source>
        <translation>Это группа настроек управления стилями. Дополнительные сведения о управлении стилями смотрите: &lt;a href=&quot;0016.html&quot;&gt;Управление стилями&lt;/a&gt;</translation>
    </message>
    <message>
        <source>Add special - Open a sub menu with the following options: </source>
        <translation>Добавить спец. элемент - откроется подменю со следующими параметрами: </translation>
    </message>
    <message>
        <source>Add image from clipboard</source>
        <translation>Добавить изображение из буфера обмена</translation>
    </message>
    <message>
        <source>Add a GMaps map</source>
        <translation>Добавить карту GMaps</translation>
    </message>
    <message>
        <source>Once you have selected one of the options, the new object is inserted into the block table and depending on object, the &lt;a href=&quot;0110.html&quot;&gt;Image framing and correction dialog&lt;/a&gt; opens.</source>
        <translation>После того как вы выбрали один из вариантов, новый объект вставляется в таблицу блоков и в зависимости от объекта, откроется диалоговое окно &lt;a href=&quot;0110.html&quot;&gt; Кадрирования и коррекции изображения&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>Paste block or image from the clipboard and insert it to the end of the block table</source>
        <translation>Вставить блок или изображение из буфера обмена и поместить его в конец таблицы блоков</translation>
    </message>
    <message>
        <source>Selects a speed curve for block animations (movement, resizing and rotating of blocks, animation of text and blocks)</source>
        <translation>Выбор скорости анимации блока (перемещение, изменение размера и вращение блоков, анимация текста и блоков)</translation>
    </message>
    <message>
        <source>To change the velocity curve for image animation (graphic effect and framing), edit the image or video and select a velocity in the Image framing and correction dialog</source>
        <translation>Используются для изменения скорости анимации изображения (графические эффекты и кадрирование), редактирования изображения или видео</translation>
    </message>
    <message>
        <source>This setting is define for the current shot, so, the modifications made will apply only to current shot. To understand the differences between the properties which apply to all shots and those which apply only to the current shot, consult: &lt;a href=&quot;0010.html&quot;&gt;How ffDiaporama works&lt;/a&gt;.</source>
        <translation>Этот параметр применяется только к текущему кадру. Чтобы понять различия между свойствами, которые применяются ко всем кадрам и свойствами, которые применяются только к текущему кадру, смотрите: &lt;a href=&quot;0010.html&quot;&gt;Принципы работы ffDiaporama&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>These settings are defines for the current shot, so, the modifications made will apply only to current shot. To understand the differences between the properties which apply to all shots and those which apply only to the current shot, consult: &lt;a href=&quot;0010.html&quot;&gt;How ffDiaporama works&lt;/a&gt;.</source>
        <translation>Эти настройки применяются только к текущему кадру. Чтобы понять различия между свойствами, которые применяются ко всем кадрам и свойствами, которые применяются только к текущему кадру, смотрите: &lt;a href=&quot;0010.html&quot;&gt;Принципы работы ffDiaporama&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>The block animations define which animations will run during the current shot. You can define different animations for every shot!</source>
        <translation>Анимация блока определяет какая анимация будет воспроизводиться на этом кадре. Вы можете определить различные анимации для каждого кадра!</translation>
    </message>
    <message>
        <source> If changes made on previous shot are applied for this block also to this shot. (This information does not appear for the 1st shot.)</source>
        <translation>Если изменения, сделанные на предыдущем кадре, применяются также к этому блоку данного кадра. (Эта информация не появляется на 1-ом кадре.)</translation>
    </message>
    <message>
        <source> If changes made on previous shot are not applied for this block to this shot. (This information does not appear for the 1st shot.)</source>
        <translation>Если изменения, сделанные на предыдущем кадре, не применяются к этому блоку данного кадра. (Эта информация не появляется на 1-ом кадре.)</translation>
    </message>
    <message>
        <source>Inheritance changes</source>
        <translation>Наследование изменений</translation>
    </message>
    <message>
        <source>Inherit changes: If this box is checked, the changes made in a previous shot will be applied to this object in this shot</source>
        <translation>Наследовать изменения: если этот флажок установлен, изменения, сделанные на предыдущем кадре, будет применены к данному объекту на этом кадре</translation>
    </message>
    <message>
        <source>This settings group defines how changes to the block parameters are reflected to the different shots.</source>
        <translation>Эта группа настроек определяет как изменения в параметрах блока отражаются на разных кадрах.</translation>
    </message>
</context>
<context>
    <name>0120</name>
    <message>
        <source>Edit text</source>
        <translation>Редактирование текста</translation>
    </message>
    <message>
        <source>Properties for all shots</source>
        <translation>Параметры для всех кадров</translation>
    </message>
    <message>
        <source> The modifications made to the following properties will apply to all shots of the slide. </source>
        <translation>Изменения, сделанные следующими настройками, будут применяться ко всем кадрам слайда.</translation>
    </message>
    <message>
        <source>Text tab</source>
        <translation>Вкладка Текст</translation>
    </message>
    <message>
        <source>First line at the top of the dialog</source>
        <translation>Первая строка верхней части диалогового окна</translation>
    </message>
    <message>
        <source>Allows you to select the font to be used, its size and its colour. This setting applies to the current selection.</source>
        <translation>Позволяет выбрать шрифт, его размер и цвет. Этот параметр применяется к текущему выделению.</translation>
    </message>
    <message>
        <source>Allows to establish (or to remove) a bullet list. This setting applies to the paragraphs of the current selection.</source>
        <translation>Позволяет установить (или удалить) маркированный список. Этот параметр применяется к текущему выделению.</translation>
    </message>
    <message>
        <source>Allows to establish (or to remove) a numbered list. This setting applies to the paragraphs of the current selection.</source>
        <translation>Позволяет установить (или удалить) нумерованный список. Этот параметр применяется к текущему выделению.</translation>
    </message>
    <message>
        <source>Horizontal alignment: left. This setting applies to the paragraph in which the cursor is.</source>
        <translation>Горизонтальное выравнивание: по левому краю. Этот параметр применяется к абзацу, в котором находится курсор.</translation>
    </message>
    <message>
        <source>Horizontal alignment: centered. This setting applies to the paragraph in which the cursor is.</source>
        <translation>Горизонтальное выравнивание: по центру. Этот параметр применяется к абзацу, в котором находится курсор.</translation>
    </message>
    <message>
        <source>Horizontal alignment: justified. This setting applies to the paragraph in which the cursor is.</source>
        <translation>Горизонтальное выравнивание: по ширине. Этот параметр применяется к абзацу, в котором находится курсор.</translation>
    </message>
    <message>
        <source>Horizontal alignment: right. This setting applies to the paragraph in which the cursor is.</source>
        <translation>Горизонтальное выравнивание: по правому краю. Этот параметр применяется к абзацу, в котором находится курсор.</translation>
    </message>
    <message>
        <source>Second line at the top of the dialog</source>
        <translation>Вторая строка верхней части диалогового окна</translation>
    </message>
    <message>
        <source>Allows you to add outline or shadow to the whole text: </source>
        <translation>Позволяет добавить контур или тень ко всему тексту: </translation>
    </message>
    <message>
        <source>The first list allows you to select the effect: </source>
        <translation>Первый список позволяет выбрать эффект: </translation>
    </message>
    <message>
        <source>No effect</source>
        <translation>Без эффекта</translation>
    </message>
    <message>
        <source>Text is shown without any shadow or outline</source>
        <translation>Текст отображается без тени или контура</translation>
    </message>
    <message>
        <source>Outline</source>
        <translation>Контур</translation>
    </message>
    <message>
        <source>Surrounds the characters with a line in the current shadow color</source>
        <translation>Обводит символы линией цвета текущей тени</translation>
    </message>
    <message>
        <source>Shadow ...</source>
        <translation>Тень ...</translation>
    </message>
    <message>
        <source>Add a shadow in the current shadow color in one of the 4 corners.</source>
        <translation>Добавление тени текущего цвета в один из 4 углов.</translation>
    </message>
    <message>
        <source>The second list allows you to select the color of the shadow or the outline.</source>
        <translation>Второй список позволяет выбрать цвет тени или контура.</translation>
    </message>
    <message>
        <source>Sets bold characters. This setting applies to the current selection.</source>
        <translation>Жирный. Этот параметр применяется к текущему выделению.</translation>
    </message>
    <message>
        <source>Sets characters to italics. This setting applies to the current selection.</source>
        <translation>Курсив. Этот параметр применяется к текущему выделению.</translation>
    </message>
    <message>
        <source>Underlines the characters. This setting applies to the current selection.</source>
        <translation>Подчеркнутый. Этот параметр применяется к текущему выделению.</translation>
    </message>
    <message>
        <source>Puts the characters to super. This setting applies to the current selection.</source>
        <translation>Надстрочный. Этот параметр применяется к текущему выделению.</translation>
    </message>
    <message>
        <source>Puts the characters to sub. This setting applies to the current selection.</source>
        <translation>Подстрочный. Этот параметр применяется к текущему выделению.</translation>
    </message>
    <message>
        <source>Move the paragraph of a notch towards the right (indent). This setting applies to the paragraph in which is the cursor.</source>
        <translation>Увеличить отступ. Этот параметр применяется к абзацу, в котором находится курсор.</translation>
    </message>
    <message>
        <source>Move the paragraph of a notch towards the left (unindent). This setting applies to the paragraph in which is the cursor.</source>
        <translation>Уменьшить отступ. Этот параметр применяется к абзацу, в котором находится курсор.</translation>
    </message>
    <message>
        <source>Vertical alignment: top. This setting applies to the block (to the whole text).</source>
        <translation>Вертикальное выравнивание: по верху. Этот параметр применяется к блоку (для всего текста).</translation>
    </message>
    <message>
        <source>Vertical alignment: middle. This setting applies to the block (to the whole text).</source>
        <translation>Вертикальное выравнивание: по середине. Этот параметр применяется к блоку (для всего текста).</translation>
    </message>
    <message>
        <source>Vertical alignment: bottom. This setting applies to the block (to the whole text).</source>
        <translation>Вертикальное выравнивание: по низу. Этот параметр применяется к блоку (для всего текста).</translation>
    </message>
    <message>
        <source>Background text tab</source>
        <translation>Вкладка Фон</translation>
    </message>
    <message>
        <source>&lt;U&gt;&lt;B&gt;&lt;I&gt;Note: This tab is available only for the title blocks (It&apos;s not available when the text applies to an image block).&lt;/I&gt;&lt;/B&gt;&lt;/U&gt;</source>
        <translation>&lt;U&gt;&lt;B&gt;&lt;I&gt;Примечание: эта вкладка доступна только для заголовков (она не доступна, когда текст накладывается на блок изображения).&lt;/I&gt;&lt;/B&gt;&lt;/U&gt;</translation>
    </message>
    <message>
        <source>Allows you to define a background brush for the shape. The following options are available: </source>
        <translation>Позволяет определить стиль фона для формы. Доступны следующие параметры:</translation>
    </message>
    <message>
        <source>No brush</source>
        <translation>Без кисти</translation>
    </message>
    <message>
        <source>The shape will have no background and will thus be totally transparent.</source>
        <translation>Форма не будет иметь никакого фона и, таким образом, будет полностью прозрачной.</translation>
    </message>
    <message>
        <source>Solid brush</source>
        <translation>Твердая кисть</translation>
    </message>
    <message>
        <source>Allows you to select a plain color.</source>
        <translation>Позволяет выбрать сплошной цвет.</translation>
    </message>
    <message>
        <source>Pattern brush</source>
        <translation>Кисть-узор</translation>
    </message>
    <message>
        <source>Allows you to select a hatched brush.</source>
        <translation>Позволяет выбрать штриховку.</translation>
    </message>
    <message>
        <source>Gradient 2 colors</source>
        <translation>Градиент из 2 цветов</translation>
    </message>
    <message>
        <source>Allows you to select a gradient of 2 colors.</source>
        <translation>Позволяет выбрать градиент, состоящий из 2 цветов.</translation>
    </message>
    <message>
        <source>Gradient 3 colors</source>
        <translation>Градиент из 3 цветов</translation>
    </message>
    <message>
        <source>Allows you to select a gradient of 3 colors.</source>
        <translation>Позволяет выбрать градиент, состоящий из 3 цветов.</translation>
    </message>
    <message>
        <source>Image from library</source>
        <translation>Изображение из библиотеки</translation>
    </message>
    <message>
        <source>Allows you to select an image from the library.</source>
        <translation>Позволяет выбрать изображение из библиотеки.</translation>
    </message>
    <message>
        <source>If background brush is Solid, Pattern or Gradient brush, then this line appears and allows you to select a color. (Depending on the brush you select, there will be one, two or three selectable colors.)</source>
        <translation>Если кисть фона - твердая, узор или градиент, то появляется эта настройка и позволяет выбрать цвет. (В зависимости от выбора кисти, там будет один, два или три цвета.)</translation>
    </message>
    <message>
        <source>If background brush is Pattern brush, then this line appears and allows you to select a pattern.</source>
        <translation>Если кисть фона - узор, то  появляется эта настройка и позволяет выбрать шаблон.</translation>
    </message>
    <message>
        <source>If background brush is Gradient, then this line appears and allows you to select the gradient orientation. </source>
        <translation>Если кисть фона -  градиент, то появляется эта настройка и позволяет выбрать направление градиента.</translation>
    </message>
    <message>
        <source>If the Gradient has 3 colors, additional controls allow to define the position (in percentage) of the 3rd gradient color.</source>
        <translation>Если градиент имеет 3 цвета, дополнительные элементы управления позволяют определить положение (в процентах) 3-го цвета градиента.</translation>
    </message>
    <message>
        <source>If background brush is Image from library, then this line appears and allows you to select an image.</source>
        <translation>Если кисть фона -  изображение из библиотеки, то появляется эта настройка и позволяет выбрать изображение.</translation>
    </message>
    <message>
        <source>Margins tab</source>
        <translation>Вкладка Поля</translation>
    </message>
    <message>
        <source>Default margins</source>
        <translation>Поля по умолчанию</translation>
    </message>
    <message>
        <source>To use predefined margins for the shape of the block. In general, these margins ensure that the text is contained in the form.</source>
        <translation>Позволяет использовать предопределенные поля для формы блока. Эти поля гарантируют, что текст поместится в форме.</translation>
    </message>
    <message>
        <source>Full shape</source>
        <translation>Полная форма</translation>
    </message>
    <message>
        <source>To use margins corresponding to the entire form, in fact, the selection rectangle shape regardless of the design.</source>
        <translation>Позволяет использовать поля, соответствующие полной форме, то есть форме прямоугольника выделения, независимо от дизайна.</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation>Пользовательские</translation>
    </message>
    <message>
        <source>To use custom margins. The following settings allow you to adjust the margins: </source>
        <translation>Позволяет использовать настраиваемые поля. Для настройки доступны следующие параметры: </translation>
    </message>
    <message>
        <source>Represents the horizontal position of the margins relative to the top-left corner of the block. (This value is expressed in % of the width of the block.)</source>
        <translation>Горизонтальная позиция поля от верхнего левого угла блока. (Это значение выражается в % от ширины блока)</translation>
    </message>
    <message>
        <source>Represents the vertical position of the margins relative to the top-left corner of the block. (This value is expressed in % of the height of the block.)</source>
        <translation>Вертикальная  позиция поля от верхнего левого угла блока.  (Это значение выражается в % от высоты блока)</translation>
    </message>
    <message>
        <source>Represents the width of the margins. (This value is expressed in % of the width of the block.)</source>
        <translation>Ширина поля. (Это значение выражается в % от ширины блока)</translation>
    </message>
    <message>
        <source>Represents the height of the margins. (This value is expressed in % of the height of the block.)</source>
        <translation>Высота поля. (Это значение выражается в % от высоты блока)</translation>
    </message>
    <message>
        <source>This dialog allows you to modify the text within a block.</source>
        <translation>Это диалоговое окно позволяет изменить текст внутри блока.</translation>
    </message>
    <message>
        <source>To understand indeed the differences between the properties which apply to all shots and those who apply only to the current shot, consult: &lt;a href=&quot;0010.html&quot;&gt;How ffDiaporama works&lt;/a&gt;. </source>
        <translation>Чтобы действительно понять различия между свойствами, которые применяются ко всем кадрам, и свойствами, которые применяются только к текущему кадру, посмотрите: &lt;a href=&quot;0010.html&quot;&gt; Принципы работы ffDiaporama&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>This settings group is the object of style management. for more information on style management, see : &lt;a href=&quot;0016.html&quot;&gt;Using style management&lt;/a&gt;</source>
        <translation>Эта группа параметров является объектом управления стилями. Дополнительные сведения об управлении стилями, см.: &lt;a href=&quot;0016.html&quot;&gt; Использование управления стилями&lt;/a&gt;</translation>
    </message>
    <message>
        <source>Allows you to add a dynamic variable to the text. For more information on dynamic variables see: &lt;a href=&quot;0013.html&quot;&gt;Dynamic variables&lt;/a&gt;</source>
        <translation>Позволяет добавить динамическую переменную в текст. Дополнительные сведения о динамических переменных смотрите в разделе &lt;a href=&quot;0013.html&quot;&gt; Динамические переменные&lt;/a&gt;</translation>
    </message>
</context>
<context>
    <name>0121</name>
    <message>
        <source>Select transition duration for a set of slides</source>
        <translation>Выбор продолжительности перехода для группы слайдов</translation>
    </message>
    <message>
        <source>Duration</source>
        <translation>Продолжительность</translation>
    </message>
    <message>
        <source>Define the animation duration.</source>
        <translation>Выбрать продолжительность анимации.</translation>
    </message>
    <message>
        <source>When you click the OK button, the new transition duration is applied to all the slides that were selected. </source>
        <translation>После нажатия кнопки ОК всем выделенным слайдам будет установлена новая продолжительность перехода. </translation>
    </message>
    <message>
        <source>This function can not be used to delete or change the slide&apos;s transition. </source>
        <translation>Эта функция не может использоваться для удаления или изменения перехода слайда.</translation>
    </message>
    <message>
        <source>If it&apos;s what you want, then call the context transitions menu by right clicking on one of the slides of the selection from the &lt;a href=&quot;0023.html&quot;&gt;timeline&lt;/a&gt; and then select &quot;Modify the transition for all the slides of the selection&quot; option.</source>
        <translation>Если это то, чего вы хотите, то вызовите контекстное меню переходов, щелкнув правой кнопкой мыши на одном из слайдов, выделенных на &lt;a href=&quot;0023.html&quot;&gt; линии времени&lt;/a&gt;, а затем выберите опцию «Установить длительность перехода».</translation>
    </message>
    <message>
        <source>This dialog allows you to define the transition duration for a set of slides:</source>
        <translation>Это диалоговое окно позволяет определить продолжительность перехода для группы слайдов:</translation>
    </message>
</context>
<context>
    <name>0122</name>
    <message>
        <source>Transition properties</source>
        <translation>Параметры перехода</translation>
    </message>
    <message>
        <source> This dialog allows you to define the entering transition for a slide. </source>
        <translation>Это диалоговое окно позволяет определить входящий переход слайда. </translation>
    </message>
    <message>
        <source>It shows a preview of the available transitions by transition family. </source>
        <translation>Оно показывает предварительный просмотр доступных переходов по типам.</translation>
    </message>
    <message>
        <source>Remark : In case this dialog is opened for a multiple slide selection, it&apos;s the first slide of the selection that is used for the preview. </source>
        <translation>Примечание: в случае, если это диалоговое окно открыто при выделении нескольких слайдов, то для предварительного просмотра используется первый слайд.</translation>
    </message>
    <message>
        <source>Transition type</source>
        <translation>Тип перехода</translation>
    </message>
    <message>
        <source>No transition</source>
        <translation>Без перехода</translation>
    </message>
    <message>
        <source>Note that this also deactivates:</source>
        <translation>Обратите внимание, что это также отключает:</translation>
    </message>
    <message>
        <source>Sound fades (The playlist of the new slide immediately replaces that of the old one)</source>
        <translation>Затухание звука (плейлист нового слайда немедленно заменяет старый)</translation>
    </message>
    <message>
        <source>Background transitions</source>
        <translation>Фоновые переходы</translation>
    </message>
    <message>
        <source>Basic</source>
        <translation>Базовые</translation>
    </message>
    <message>
        <source>Scripted transition</source>
        <translation>Запрограммированные переходы</translation>
    </message>
    <message>
        <source>LUMA transition</source>
        <translation>LUMA переходы</translation>
    </message>
    <message>
        <source>The animation is based on a luminance mask : the darker the points in the mask, the faster the corresponding points in the new slide replace those in the old slide.</source>
        <translation>Анимация основана на маске яркости: темные точки в маске быстрее заменяются соответствующими точками нового слайда.</translation>
    </message>
    <message>
        <source>Speed wave</source>
        <translation>Скорость</translation>
    </message>
    <message>
        <source>Allows you to select a speed curve to apply to the transition</source>
        <translation>Позволяет выбрать скорость перехода</translation>
    </message>
    <message>
        <source>Duration</source>
        <translation>Продолжительность</translation>
    </message>
    <message>
        <source>Allows you to define the duration of the animation. </source>
        <translation>Позволяет установить продолжительность анимации.</translation>
    </message>
    <message>
        <source>The possible choices are of 0,5 seconds (very fast) to 10 seconds (very slow)</source>
        <translation>Возможны варианты от 0,5 секунд (очень быстро) до 10 секунд (очень медленно)</translation>
    </message>
    <message>
        <source>See also</source>
        <translation>Смотрите также</translation>
    </message>
    <message>
        <source>Description of LUMA</source>
        <translation>Описание LUMA</translation>
    </message>
    <message>
        <source>Allows you to select a transition family: </source>
        <translation>Позволяет выбрать тип перехода:</translation>
    </message>
    <message>
        <source>No transition: The new slide immediately replaces the old one. </source>
        <translation>Нет перехода: новый слайд немедленно заменяет старый.</translation>
    </message>
    <message>
        <source>Dissolve effect: The slide appears gradually, with gradually increasing opacity.</source>
        <translation>Эффект растворения: слайд появляется постепенно, с постепенно возрастающей непрозрачностью.</translation>
    </message>
    <message>
        <source>Zoom: The new slide appears by getting bigger while the old slide disappears with a dissolve effect. </source>
        <translation>Масштабирование: новый слайд появляется все больше и больше, в то время как старый слайд исчезает с эффектом растворения.</translation>
    </message>
    <message>
        <source>Slide: The new slide glides onto the old slide which disappears with a dissolve effect. </source>
        <translation>Скольжение: новый слайд скользит на старый слайд, который исчезает с эффектом растворения.</translation>
    </message>
    <message>
        <source>Push: The new slide takes the place of the old slide by pushing it aside.</source>
        <translation>Сталкивание: новый слайд занимает место старого, сталкивая его в сторону.</translation>
    </message>
</context>
<context>
    <name>0123</name>
    <message>
        <source>Add or modify a location</source>
        <translation>Добавить или изменить местоположение</translation>
    </message>
    <message>
        <source> This dialog allows you to define a location using Google Maps. </source>
        <translation> Это диалоговое окно позволяет выбрать местоположение, используя  Google Maps. </translation>
    </message>
    <message>
        <source>Google address</source>
        <translation>Адрес Google</translation>
    </message>
    <message>
        <source>Enter the postal adress to find in this zone.</source>
        <translation>Введите в эту область искомый почтовый адрес.</translation>
    </message>
    <message>
        <source>When you press the Enter key, a search is made using Google Maps and the addresses found are used to fill the list.</source>
        <translation>После нажатия кнопки Enter будет произведен поиск в Google Maps и появится список найденных адресов.</translation>
    </message>
    <message>
        <source>Then select the correct address in the list</source>
        <translation>Выберите правильный адрес из списка</translation>
    </message>
    <message>
        <source>Open the favorite menu: </source>
        <translation>Открыть меню Избранного: </translation>
    </message>
    <message>
        <source>Add to favorite: Adds the current location to the list.</source>
        <translation>Добавить в избранное: добавить текущее местоположение в список.</translation>
    </message>
    <message>
        <source>Update this favorite: Update the favorite using current settings.</source>
        <translation>Обновить это Избранное: обновить Избранное, используя текущие настройки.</translation>
    </message>
    <message>
        <source>Remove this favorites: Remove the favorite from the list</source>
        <translation>Удалить это Избранное: удалить Избранное из списка</translation>
    </message>
    <message>
        <source>The list of the favourite: Use a favorite to fill the dialog box fields.</source>
        <translation>Список Избранного: используйте Избранное для заполнения полей диалогового окна.</translation>
    </message>
    <message>
        <source>Friendly address</source>
        <translation>Понятный адрес</translation>
    </message>
    <message>
        <source>Enter the address in a more readable form. This form will be used to display the marker.</source>
        <translation>Введите адрес в удобном для чтения виде. Этот адрес будет использоваться при отображении маркера.</translation>
    </message>
    <message>
        <source>Friendly name</source>
        <translation>Понятное имя</translation>
    </message>
    <message>
        <source>Enter a name for this location. This name will be used to display the marker.</source>
        <translation>Введите имя для этого местоположения. Это имя будет использоваться при отображении маркера.</translation>
    </message>
    <message>
        <source>Icon</source>
        <translation>Значок</translation>
    </message>
    <message>
        <source>Select an image to be used as icon to display the marker.</source>
        <translation>Выберите изображение, которое будет использовано в качестве значка при отображении маркера.</translation>
    </message>
    <message>
        <source> Click on the icon zone or on the </source>
        <translation>Нажмите на область значка или </translation>
    </message>
    <message>
        <source> button to select an image and edit it.</source>
        <translation> кнопку для выбора изображения и его редактирования.</translation>
    </message>
    <message>
        <source> Click on this </source>
        <translation> Нажмите эту </translation>
    </message>
    <message>
        <source> button to clear the icon.</source>
        <translation> кнопку для удаления значка.</translation>
    </message>
    <message>
        <source>Map zone</source>
        <translation>Область карты</translation>
    </message>
    <message>
        <source>Click on a point on the map zone to select it.</source>
        <translation>Нажмите на точку в области карты, чтобы выбрать ее.</translation>
    </message>
    <message>
        <source>You can also use the slider and the </source>
        <translation>Также вы можете использовать ползунок </translation>
    </message>
    <message>
        <source> and </source>
        <translation> и </translation>
    </message>
    <message>
        <source> buttons to modify the zoom level.</source>
        <translation> кнопки для изменения масштаба.</translation>
    </message>
</context>
<context>
    <name>0124</name>
    <message>
        <source>Cut a sound file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This dialog allows you to cut a sound file.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The progress bar</source>
        <translation type="unfinished">Прогресс бар</translation>
    </message>
    <message>
        <source>Displays as follows: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The ruler representing the duration of the sound file is dispayed under a black background. Remark than the length of the ruler is increased in proportion to the duration of the sound file.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The blue part, on wave form and ruler, represents the part of the sound file which is selected (which will be used in the assembly).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> This button starts playback. Click again on this button to pause. </source>
        <translation type="unfinished">Эта кнопка запускает воспроизведение. Повторное нажатие ставит на паузу.</translation>
    </message>
    <message>
        <source>You can move with the mouse the </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> handle, on the progress bar, to move the current position</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>You can move with the mouse the two </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> and </source>
        <translation type="unfinished"> и </translation>
    </message>
    <message>
        <source> handles, on the progress bar, to move the Start and End positions</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The working range</source>
        <translation type="unfinished">Рабочий диапазон</translation>
    </message>
    <message>
        <source> Positions the cursor at the starting point</source>
        <translation type="unfinished">Переместить курсор в начало</translation>
    </message>
    <message>
        <source> Uses the current cursor position as starting point (carries out an edit)</source>
        <translation type="unfinished">Использовать текущую позицию как стартовую (происходит редактирование - обрезка видео)</translation>
    </message>
    <message>
        <source> Positions the cursor at the end point</source>
        <translation type="unfinished">Переместить курсор в конец</translation>
    </message>
    <message>
        <source> Uses the current cursor position as end point (carries out an edit)</source>
        <translation type="unfinished">Использовать текущую позицию как конечную (происходит редактирование - обрезка видео)</translation>
    </message>
    <message>
        <source>The wave form of the sound is displayed under a white background.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QHP</name>
    <message>
        <source>Welcome to the ffDiaporama WIKI</source>
        <translation>Добро пожаловать в ffDiaporama WIKI</translation>
    </message>
    <message>
        <source>How ffDiaporama works</source>
        <translation>Принципы работы ffDiaporama</translation>
    </message>
    <message>
        <source>Functional principles</source>
        <translation>Принципы функционирования</translation>
    </message>
    <message>
        <source>The Visible property of blocks and the management of the breaks</source>
        <translation>Свойство &quot;видимости&quot; блоков и управление переходами между ними</translation>
    </message>
    <message>
        <source>All shots regulations versus current shot regulations</source>
        <translation>Настройки всех кадров и настройки текущего кадра</translation>
    </message>
    <message>
        <source>Style sheets</source>
        <translation>Таблицы стилей</translation>
    </message>
    <message>
        <source>Interface description</source>
        <translation>Описание интерфейса</translation>
    </message>
    <message>
        <source>The main window</source>
        <translation>Главное окно</translation>
    </message>
    <message>
        <source>The toolbar</source>
        <translation>Панель инструментов</translation>
    </message>
    <message>
        <source>The timeline</source>
        <translation>Линия времени (таймлайн)</translation>
    </message>
    <message>
        <source>The multimedia file browser</source>
        <translation>Мультимедиа Проводник</translation>
    </message>
    <message>
        <source>Rendering videos</source>
        <translation>Создание видео</translation>
    </message>
    <message>
        <source>Smartphones and tablets</source>
        <translation>Смартфоны и планшеты</translation>
    </message>
    <message>
        <source>Portable devices</source>
        <translation>Портативные устройства</translation>
    </message>
    <message>
        <source>Multimedia system (Home cinema)</source>
        <translation>Мультимедиа система (домашний кинотеатр)</translation>
    </message>
    <message>
        <source>For the WEB</source>
        <translation>Интернет</translation>
    </message>
    <message>
        <source>Video codec</source>
        <translation>Видео кодек</translation>
    </message>
    <message>
        <source>Audio codec</source>
        <translation>Аудио кодек</translation>
    </message>
    <message>
        <source>Containers</source>
        <translation>Контейнеры</translation>
    </message>
    <message>
        <source>Video standards and resolutions</source>
        <translation>Видео стандарты и разрешения</translation>
    </message>
    <message>
        <source>File attachments (Thumbnails, nfo, etc...)</source>
        <translation>Присоединяемые файлы (обложка, nfo, и др.)</translation>
    </message>
    <message>
        <source>Technical information on ffDiaporama</source>
        <translation>Техническая информация о ffDiaporama</translation>
    </message>
    <message>
        <source>ffDiaporama command line arguments</source>
        <translation>Параметры командной строки ffDiaporama</translation>
    </message>
    <message>
        <source>ffDiaporama project files</source>
        <translation>Файлы проектов ffDiaporama</translation>
    </message>
    <message>
        <source>The configuration files for ffDiaporama</source>
        <translation>Файлы конфигурации ffDiaporama</translation>
    </message>
    <message>
        <source>XBMC nfo files</source>
        <translation>XBMC nfo файлы</translation>
    </message>
    <message>
        <source>Dialog boxes</source>
        <translation>Диалоговые окна</translation>
    </message>
    <message>
        <source>Application options</source>
        <translation>Настройки программы</translation>
    </message>
    <message>
        <source>Manage devices</source>
        <translation>Управление устройствами</translation>
    </message>
    <message>
        <source>Add or modify a predefined title slide</source>
        <translation>Добавление или изменение слайда из шаблона</translation>
    </message>
    <message>
        <source>Background properties</source>
        <translation>Свойства фона</translation>
    </message>
    <message>
        <source>Chapter properties</source>
        <translation>Свойства главы</translation>
    </message>
    <message>
        <source>Check configuration</source>
        <translation>Проверка конфигурации</translation>
    </message>
    <message>
        <source>Export project</source>
        <translation>Экспорт проекта</translation>
    </message>
    <message>
        <source>Project properties</source>
        <translation>Свойства проекта</translation>
    </message>
    <message>
        <source>Select files</source>
        <translation>Выбор файлов</translation>
    </message>
    <message>
        <source>Correct, reframe or cut image or video</source>
        <translation>Коррекция, кадрирование или обрезка изображения или видео</translation>
    </message>
    <message>
        <source>File information</source>
        <translation>Информация о файле</translation>
    </message>
    <message>
        <source>Manage favorite</source>
        <translation>Управление избранным</translation>
    </message>
    <message>
        <source>Manage style</source>
        <translation>Управление стилями</translation>
    </message>
    <message>
        <source>Music properties</source>
        <translation>Параметры музыки</translation>
    </message>
    <message>
        <source>Render video</source>
        <translation>Создание видео</translation>
    </message>
    <message>
        <source>Ruler properties</source>
        <translation>Свойства линеек</translation>
    </message>
    <message>
        <source>Edit thumbnail model</source>
        <translation>Изменение шаблона обложки</translation>
    </message>
    <message>
        <source>Set first shot duration for a set of slides</source>
        <translation>Выбор продолжительности первого кадра для группы слайдов</translation>
    </message>
    <message>
        <source>Slide properties</source>
        <translation>Параметры слайда</translation>
    </message>
    <message>
        <source>Edit text</source>
        <translation>Редактирование текста</translation>
    </message>
    <message>
        <source>Select transition duration for a set of slides</source>
        <translation>Выбор продолжительности перехода для группы слайдов</translation>
    </message>
    <message>
        <source>Transition properties</source>
        <translation>Параметры перехода</translation>
    </message>
    <message>
        <source>Dynamic variables</source>
        <translation>Динамические переменные</translation>
    </message>
    <message>
        <source>Predefined title slide</source>
        <translation>Шаблон заголовка слайда</translation>
    </message>
    <message>
        <source>Configuration dialog boxes</source>
        <translation>Окна настройки программы</translation>
    </message>
    <message>
        <source>Editing dialog boxes</source>
        <translation>Окна редактирования</translation>
    </message>
    <message>
        <source>Dialog boxes related to the project</source>
        <translation>Окна, связанные с проектом</translation>
    </message>
    <message>
        <source>Various dialog boxes</source>
        <translation>Прочие окна</translation>
    </message>
    <message>
        <source>Types of objects in ffDiaporama</source>
        <translation>Типы объектов в ffDiaporama</translation>
    </message>
    <message>
        <source>Add or modify a location</source>
        <translation>Добавить или изменить местоположение</translation>
    </message>
    <message>
        <source>Cut a sound file</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>main</name>
    <message>
        <source>Welcome to the ffDiaporama WIKI</source>
        <translation>Добро пожаловать в ffDiaporama WIKI</translation>
    </message>
    <message>
        <source>How ffDiaporama works</source>
        <translation>Принципы работы ffDiaporama</translation>
    </message>
    <message>
        <source>Interface description</source>
        <translation>Описание интерфейса</translation>
    </message>
    <message>
        <source>Rendering videos</source>
        <translation>Создание видеофайлов</translation>
    </message>
    <message>
        <source>Technical information on ffDiaporama</source>
        <translation>Техническая информация о ffDiaporama</translation>
    </message>
    <message>
        <source>ffDiaporama Web site</source>
        <translation>веб-сайте ffDiaporama</translation>
    </message>
    <message>
        <source>Finally, you&apos;ll also find help on the </source>
        <translation>Также, вы можете получить помощь на</translation>
    </message>
    <message>
        <source>ffDiaporama forum</source>
        <translation>форуме ffDiaporama</translation>
    </message>
    <message>
        <source>Other elements of documentation are available on the </source>
        <translation>Дополнительная информация доступна на </translation>
    </message>
    <message>
        <source>This documentation is divided into the followed themes:</source>
        <translation>Эта документация содержит следующие разделы:</translation>
    </message>
</context>
</TS>
