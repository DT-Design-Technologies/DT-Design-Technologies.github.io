# AEDT Library Content


###### ExtendScript library for Adobe After Effects


___

##### COMMON INVENTORY (JS)

<details><summary>list</summary>

```js
    function            makeFunction(*)
    [val]|false         isNum(_val, _match)
//dec2hex(_dec)
//hashCode(_str)
    dbl                 getRandom(_min, _max)
    [_cnt]|null         getRandoms(_len, _cnt)
    str                 source2JSON(_src)

    -1|0|1             .sign()                                      Number.prototype
    dbl                .clamp(_limL, _limR)                         Number.prototype
    dbl                .round(_exp)                                 Number.prototype
    str|Inf|NaN        .toDigits(_digL, _digR)                      Number.prototype
    bool               .check(_rgxp)                                String.prototype
    str                .trim(_isClpsX, _isClpsY, _rmCmt, _LE)       String.prototype
    str                .decodeURI()                                 String.prototype
    str                .encodeURI()                                 String.prototype
    str                .escape()                                    String.prototype
//String.prototype.toRE = function(_isStrict)
    str                .separateDigits()                            String.prototype
//setWraps(_str, _maxLen)
    int                .size()                                      Object.prototype
    []                 .keys()                                      Object.prototype
    bool               .subsetOf(_obj, _fCompare)                   Object.prototype
    {}|[]|null         .diff(_obj, _fCompare)                       Object.prototype
    {}                 .merge(_mrg)                                 Object.prototype
    key|[keys]|null    .find(_value, _all, _fCompare)               Object.prototype
    []                 .pad(_len, _val, _fChange)                   Array.prototype
    val                .min()                                       Array.prototype
    val                .max()                                       Array.prototype
    dbl|null           .sum(_cnt)                                   Array.prototype
//qSort(_array, _begin, _end)
    void               .psort(_sprop1, _sprop2,..)                  Array.prototype
    []                 .rotate(_step)                               Array.prototype
    [][]|null          .transpose()                                 Array.prototype
    []|null            .unfold()                                    Array.prototype
    []|idx|str         .getSection(_key, _isStrict)                 Array.prototype
    [{}+.__id]         .select(_query, _cond)                       Array.prototype

    int                .getWeek(_wstart, _cday)                     Date.prototype
    int                 daysInMonth(_year, _month)
    str                 shortDate(_date, _isUTC, _seps)

    {cat:[Err+.category+.id]}                                                                   setError()
    void                                                                                            .add(_category, _id, _msg)                          errObj
    [recs]|null                                                                                     .get(_category, _id, _msg)                          errObj
    int                                                                                             .announce(_category, _id, _msg)                     errObj
    str                                                                                             .log(_category, _id, _msg)                          errObj
```
</details>

___

##### GEOMETRY INVENTORY (JS)

<details><summary>list</summary>

```js
    dbl                 deg2rad(_deg)
    dbl                 rad2deg(_rad)
    dbl|-1              length(vec|(_p1,_p2))
    [1]|null            normalize(_vec)
    dbl|null            dot(_v1, _v2)
    []|null             cross(_v1, _v2)
    dbl|-1              strokeLength(_vrts)
    [_vrts]|null        shiftVertices(_vrts, _shift)
    dbl|null            getAngle(_v1, _v2)
    [orient]|null       getOrientation(_u, _v, _w)
    {l,t,r,b}|null      getEdges(_vrts)
    {point,edge}|null   getApex(_vrts, _delta)
    'qdr'|'edge'|null   getQuadrant(_point, _origin, _delta, _rot)

    {grid,size,spaces,titles,margins,sub:[w,h]|[[w],[h]],cell:{prnt,snm,size,pos,(val)}}|null   setTable(_grid|_table, _size, _spaces, _titles, _margins)
    void                                                                                            .adduce()                                           tableObj
    void                                                                                            .reduce()                                           tableObj
    void                                                                                            .cycle(_direction, _fCell)                          tableObj
    void                                                                                            .add(cr)                                            tableObj
    void                                                                                            .del(cr, _fCell)                                    tableObj
    {cell}|null                                                                                     .setArea(_cr, _sz)                                  tableObj
    void                                                                                                .set(_val, _num)                                    tableObj.cell
```
</details>

___

##### COLOR INVENTORY (JS)

<details><summary>list</summary>

```js
    [r,g,b]             rgb(_R, _G, _B, _depth)
    [r,g,b]|null        int2rgb(_color)
    int|null            rgb2int(_rgb)
    [h,s,l]             rgb2hsl(_rgb)
    [r,g,b]             hsl2rgb(_hsl)
    [h,s,v]             rgb2hsv(_rgb)
    [r,g,b]             hsv2rgb(_hsv)
    [x,y,z]             rgb2xyz(_rgb)
    [r,g,b]             xyz2rgb(_xyz)
    [L,a,b]             xyz2Lab(_xyz)
    [x,y,z]             Lab2xyz(_Lab)
    [L,a,b]             rgb2Lab(_rgb)
    [r,g,b]             Lab2rgb(_Lab)
    dbl                 perceivedBrightness(_rgb)
    dbl|NaN             colorDiff(_c1, _c2, _cSpace, _CIE)
```
</details>

___

##### ENVIRONMENT & UI (ES)

<details><summary>list</summary>

```js
    uri                                                                                         getCurDir()
    uri                                                                                         getAppDir()
    {}                                                                                          setTimer()
    void                                                                                            .reset()                                            timerObj
    dbl|str                                                                                         .interval(_isStr)                                   timerObj
    dbl|str                                                                                         .uptime(_isStr)                                     timerObj
    File|Folder|null                                                                            checkPath(_path, _type, _alt)
    {}                                                                                          setLocale(_path, _lang)
    str                                                                                             .change(_str, _lng)                                 localeObj
    File|null                                                                                   dropLog(_log, _path)
    {}|null                                                                                     loadJSON(_path)
    {}|null                                                                                     loadCSV(_path)
    {TAG:ffx|(jsxbin|jsx)|(jsxinc)+.ver}|tag|null                                               loadHandlers(_path)
    [{key,ver}]                                                                                     .ver()
//    str                                                                                         readFromFile(_file, _enc)
//    file|null                                                                                   getFileFromInternet(_url, _place)
    str|null|bool                                                                               callSystem(_cmd, _wait)
    {status,statusline,headers,body}|null                                                       webRequest(_url, _headers, _post, _wait)
    xml|null                                                                                    parseXML(_data, _name, _elements, _descendants)
    str|null                                                                                    callViaBridge(_tgt, _src, _wait)
    [str]|str|null                                                                              getFonts()
    bool                                                                                        openLink(_lnk)
//ScriptUIGraphics.prototype.changeColor = function(_color, _pen)
    void                                                                                        changeGrColor(_graphics, _color, _pen)
    str|null                                                                                    rBtnSelected(_rBtnGr)
    void                                                                                        toggleSize(_elmt)
```
</details>

___

##### COMMON INVENTORY (AE)

<details><summary>list</summary>

```js
    obj|[obj]|null          .getItemByRE(_type, _rgxp, _all)                        Project.prototype
    layer|[layer]|null      .getLayerByRE(_rgxp, _all)                              CompItem.prototype
    [layer]                 .cycleLayers(_fSelect, _fAction)                        CompItem.prototype
    time|int|null           .time2discrete(_time, _isFrames)                        CompItem.prototype
    []|null                 .getSection(_key)                                       LayerCollection.prototype, ItemCollection.prototype, PropertyGroup.prototype
    [layer]                 .cycleProperties(_fSelect, _fAction)                    AVLayer.prototype, ShapeLayer.prototype, TextLayer.prototype, CameraLayer.prototype, LightLayer.prototype
    obj|null                .findContainer(_type)                                   Property.prototype, PropertyGroup.prototype, MaskPropertyGroup.prototype

    void                    .changeDuration(_dur, _fSelect)                         CompItem.prototype
    void                    .sortLayers(_fCompare, _fSelect)                        CompItem.prototype
    void                    .openInViewer()                                         CompItem.prototype
    layer                   .precompIfStyle(_style)                                 AVLayer.prototype, ShapeLayer.prototype, TextLayer.prototype
    layer|null              .psd2text(_clrSel)                                      AVLayer.prototype

    layer                   .makeCopyIn(_comp)                                      AVLayer.prototype, ShapeLayer.prototype, TextLayer.prototype, CameraLayer.prototype, LightLayer.prototype
    void                    .applyPresetHere(_preset, _time, _clrSel)               AVLayer.prototype, ShapeLayer.prototype, TextLayer.prototype, CameraLayer.prototype, LightLayer.prototype
    void                    .toggleContent(_names, _cond, _isInvert)                PropertyGroup.prototype
    bool                    .cmdByID(_id, _clrSel)                                  Property.prototype, PropertyGroup.prototype, MaskPropertyGroup.prototype, AVLayer.prototype, ShapeLayer.prototype, TextLayer.prototype

    void                    .clear(_fSelect)                                        CompItem.prototype
    void                    .clearSelection(_fSelect)                               CompItem.prototype
    void                    .clear(_fSelect)                                        PropertyGroup.prototype
    void                    .clear(_fSelect)                                        RenderQueue.prototype
```
</details>

___

##### KEYFRAME INVENTORY (AE)

<details><summary>list</summary>

```js
    void                    .setByTime(_time, _val)                                 Property.prototype
    void                    .clearTimes(_in, _out, _fixEdges)                       Property.prototype
    void                    .clearKeys(_in, _out)                                   Property.prototype

    +-idx|null              .keyAt(_time, _delta)                                   Property.prototype
    {key}|null              .getKey(_idx)                                           Property.prototype
    void                        .swap()                                                 keyObj
    idx|null                .setKey(_time, _key)                                    Property.prototype
    idx                     .initKey(_time, _ease, _infl, _speed)                   Property.prototype
    void                    .changeTo(_val, _time, _dur, _inflOI, _spdOI)           Property.prototype
    void                    .shape2keys(_shape, _time, _dur, _inflOI, _spdOI)       Property.prototype
    void                    .relocateAnimation(_time, _mult, _mode, _prop)          Property.prototype
    void                    .bake(_clrExpr)                                         Property.prototype

    void                    .setMarker(_time, _cmt, _prm, _isForce)                 CompItem.prototype, AVLayer.prototype, ShapeLayer.prototype, TextLayer.prototype, CameraLayer.prototype, LightLayer.prototype
```
</details>

___

##### EXPRESSION INVENTORY (AE)

<details><summary>list</summary>

```js
    layer+.{pub}            .addSRect(_names, _size, _align, _colors)               LayerCollection.prototype
    ectrl                   .addControl(_mname, _name, _val)                        AVLayer.prototype, ShapeLayer.prototype, TextLayer.prototype
    
    void                    .correctExpr(_find, _replace, _fSelect)                 Project.prototype, CompItem.prototype
    void                    .toggleExpr(_cond, _fSelect, _ldepth, _pdepth)          AVLayer.prototype, ShapeLayer.prototype, TextLayer.prototype, CameraLayer.prototype, LightLayer.prototype, PropertyGroup.prototype, MaskPropertyGroup.prototype
    val|null                .valueViaExpr(_expr, _time)                             Property.prototype
    {l,t,r,b}|null          .getEdgesViaExpr(_center, _time)                        AVLayer.prototype, ShapeLayer.prototype, TextLayer.prototype
    [r,g,b]|null            .getColorViaExpr(_point, _radius, _time)                AVLayer.prototype, ShapeLayer.prototype, TextLayer.prototype
```
</details>

___

##### HELPER INVENTORY (AE)

<details><summary>list</summary>

```js
    {arg,width,height,center,pixelAspect,fail}                                                  setZone(_zone)
    void                                                                                            .set(_params)                                       zoneObj
    void                                                                                            .adduce()                                           zoneObj
    void                                                                                            .reduce()                                           zoneObj
    {}                                                                                          setCache(_time)
    length                                                                                          .add(_obj, _key, _val)                              cacheObj
    set                                                                                             .last()                                             cacheObj
    [set]                                                                                           .get(_set, _key, _fDel)                             cacheObj
    [set]                                                                                           .restore(_set, _key)                                cacheObj
    [set]                                                                                           .clear(_set, _key)                                  cacheObj
    {charAspect}                                                                                setWrapper(_lsample)
    void                                                                                            .init(_ltext, _load)                                wrapObj
    void                                                                                            .limit(_width, _fsize, _lines, _mrgn)               wrapObj
    dbl                                                                                             .getLen(_str, _fsize)                               wrapObj
    null|[str]+.fsize                                                                               .getWraps(_str, _lim)                               wrapObj
    [str]+.fsize                                                                                    .setWraps(_str)                                     wrapObj
    {rect}                                                                                          .test(_src, _str)                                   wrapObj
    null|[str]+.fsize                                                                               .drop(_ltext, _lim, _str)                           wrapObj
    layer|null                                                                                  lchain2obj(_lchain, _isClps3D)
//lchainObj.setCtrl = function(_cond, _nm)
    val|null                                                                                        .pass(_code, _time, _prop, _val)                    lchainObj
    vec|null                                                                                        .toRoot(_vec, _time, _prop, _func)                  lchainObj
    vec|null                                                                                        .fromRoot(_vec, _time, _prop, _func)                lchainObj
    orient|null                                                                                     .lookAt(_target, _time, _prop, _isSelf)             lchainObj
    orient|null                                                                                     .lookWith(_target, _time, _prop, _isSelf)           lchainObj
    prop|null                                                                                   pchain2obj(_pchain)
    null|['err']                                                                                copyPaste(_pCopy, _pPaste, _comps, _layers, _clrSel)
```
</details>

___

##### TRANSFORM INVENTORY (AE)

<details><summary>list</summary>

```js
    void                    .spreadLayers(_span, _base, _time, _fSelect)            CompItem.prototype
    layer|null              .precompToFront(_layers, _ap, _nm, _zone)               LayerCollection.prototype
    void                    .fit3DTransform(_lt, _rt, _rb)                          AVLayer.prototype
    {scorr,shift}           .adjustTransform(_zone, _fit, _align)                   AVLayer.prototype
    void                    .resetTransform(_clrPrnt, _setExpr)                     AVLayer.prototype, ShapeLayer.prototype, TextLayer.prototype
    void                    .moveAnchor(_apex, _space)                              AVLayer.prototype, ShapeLayer.prototype, TextLayer.prototype
    void                    .shiftPosition(_shift, _space)                          AVLayer.prototype, ShapeLayer.prototype, TextLayer.prototype
    void                    .reScale(_scale)                                        AVLayer.prototype, ShapeLayer.prototype, TextLayer.prototype
    void                    .resetTransform(_clrPrnt, _setExpr)                     CameraLayer.prototype
    void                    .resetZoom(_focal, _film)                               CameraLayer.prototype
```
</details>

___

##### UNSTABLE & COMPLEX (AE + ES)

<details><summary>list</summary>

```js
    file|null                                                                                                               .collect(_path, _name)                                   Project.prototype
    void                                                                                                                    .adduceObj(_items, _action)                              Project.prototype
    [ftg]|null                                                                                                              .importImgFolder(_folder, _pFldr)                        Project.prototype
    [comp]|null                                                                                                             .organizeByComps(_ftgList, _tmpl, _prefix, _pFldr)       Project.prototype
    comp+.[[opted]]                                                                                                         .replicate(_opt, _fSkip, _stg)                           CompItem.prototype
    void                                                                                                                    .resetContainer(_depth, _fSelect)                        AVLayer.prototype
    void                                                                                                                    .fixCollisions(_names)                                   AVLayer.prototype
    []                                                                                                                      .pchain(_lchain)                                         Property.prototype

    [shape]                                                                                                                 .split(_point, _delta)                                   Shape.prototype
    [[vrts]+.src+.par+.lch]|null                                                                                            .getVertices(_lname, _fMask, _space)                     AVLayer.prototype
    {(own,rel,ext):{lt,rt,rb,w,h,c,vx,vy,ap,par},edge,sets:[own,rel,ext,edge,src:{layer,lchain,own,rel,ext}]}|null          .getGMfrom(_lname, _fMask, _delta, _rot)                 AVLayer.prototype

    {point,orient,rot,shift}|null                                                                                           .adjustTo(_target, _time, _nadir)                        CameraLayer.prototype
    void                                                                                                                         .set(_t)                                            adjustObj
    void                                                                                                                         .slide(_t, _dur, _inflOI, _spdOI)                   adjustObj
    void                                                                                                                    .curveSlide(_idx, _prop)                                 AVLayer.prototype, ShapeLayer.prototype, TextLayer.prototype, CameraLayer.prototype, LightLayer.prototype
//CompItem.prototype.sloped2scr = function(_zone, _angleX, _zoom)
    null|{treeObj}                                                                                                          .makeTree(_fInit, _hList, _fPre, _fPost, _fStat)         AVLayer.prototype
    {}                                                                                                                          _exec._setup(_layer, _ansector)
    {}                                                                                                                          _exec._wrap(_setup)
    void                                                                                                                        _exec._handle(_env, _exch, _stage)
    {}                                                                                                                          _exec._update(_env, _exch)
    null|'err'                                                                                                              .makeSequence(_clips, _dic, _fClip)                      CompItem.prototype
    {table+.lctrl+.lbase+(.ctmpl:{normal,titleL,tileT}+.sub.pub)}.cell+(.lsub,.lval)|null                                   .makeTable(_table, _flags, _decor, _pFldr, _fCell)       CompItem.prototype
    void                                                                                                                         .add(_cr, _fCell)                                   tableObj
    void                                                                                                                         .del(_cr, _fCell)                                   tableObj
    {cell+}|null                                                                                                                 .setArea(_cr, _sz, _val)                            tableObj
    comp+.sub.pub                                                                                                                    .copy(_nnm)                                         tableObj.ctmpl.*
    void                                                                                                                             .set(_val, _num, _prm)                              tableObj.cell
```
</details>

___
