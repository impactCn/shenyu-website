---
title: 选择器和规则管理
keywords: ["选择器", "规则"]
description: 选择器和规则管理
---


本文档将介绍`Apache ShenYu`后台管理系统中选择器和规则的使用，关于选择器和规则的概念及设计请参考 [流量控制](../../design/flow-control)。

请参考运维部署的内容，选择一种方式启动`shenyu-admin`。比如，通过 [本地部署](../../deployment/deployment-local) 启动`Apache ShenYu`后台管理系统。 启动成功后，可以直接访问 http://localhost:9095 ，默认用户名和密码分别为: `admin` 和 `123456`。


## 选择器

在插件列表中展示了当前的所有插件，可以给每个插件添加选择器和规则：

<img src="/img/shenyu/basicConfig/pluginHandle/selector_example.png" width="80%" height="50%" />

例如，给`divide`插件添加选择器：

<img src="/img/shenyu/basicConfig/pluginHandle/selector_add.png" width="80%" height="80%" />


* 选择器详解：

  * 名称：给选择器取一个名字。
  * 类型：自定义流量(`custom flow`) 或 全流量(`full flow`)。自定义流量就是请求会走下面的匹配方式与条件。全流量则不走。
  * 匹配方式：`and`或者 `or` 是指下面多个条件是按照 并(`and`) 还是 或(`or`) 的方式来组合。
  * 条件：
    * `uri`：根据 `uri` 的方式来筛选流量，`match` 的方式支持模糊匹配（`/**`）
    * `header`：根据请求头里面的字段来筛选流量。
    * `query`：根据 `uri` 的查询条件来进行筛选流量。
    * `ip`：根据请求的真实 `ip` 来筛选流量。
    * `host`：根据请求的真实 `host` 来筛选流量。
    * `post`：不建议使用。
    * `cookie`：根据请求的 `cookie` 来筛选流量。
    * `req_method`：根据请求的 `req_method` 来筛选流量。
    * 条件匹配：
      * `match`：模糊匹配，建议和`uri`条件搭配，支持 `restful` 风格的匹配。（`/test/**`）
      * `=`：前后值相等，才能匹配。
      * `regEx`：正则匹配，表示前面一个值去匹配后面的正则表达式。
      * `like`：字符串模糊匹配。
      * `contains`：请求包含指定的值，才能匹配。
      * `SpEl`：`SpEl`表达式匹配。
      * `Groovy`：通过`Groovy`脚本语言匹配。
      * `TimeBefore`：指定时间之前。
      * `TimeAfter`：指定时间之后。
  * 继续后续选择器：后续选择器还是否执行。
  * 是否开启：打开才会生效。
  * 打印日志：打开时，当匹配上的时候，会打印匹配日志。
  * 执行顺序：当多个选择器的时候，执行顺序小的优先执行，值越小优先级越高。
  * 处理：即`handle`字段，在 [插件处理管理](./plugin-handle-explanation) 中进行设置。作用是：当请求流量匹配上该选择器时，做什么样的处理操作。

* 上述图片中表示: 当请求的 `uri` 前缀是 `/http`，会转发到 `127.0.0.1:8080` 这个服务上。

* 选择器建议：可以通过设置 `uri` 条件， `match` 前缀（`/contextPath`）匹配，进行第一道流量筛选。

## 规则

<img src="/img/shenyu/basicConfig/pluginHandle/rule_handle.png" width="80%" height="80%" />

* 当流量经过选择器匹配成功之后，会进入规则来进行最终的流量匹配。

* 规则是对流量最终执行逻辑的确认。

* 规则详解：
  * 名称：给规则取一个名字。
  * 匹配方式：`and` 或者 `or` 是指下面多个条件的组合方式。
  * 条件：
    * `uri`：根据 `uri` 的方式来筛选流量，`match` 的方式支持模糊匹配（`/**`）
    * `header`：根据请求头里面的字段来筛选流量。
    * `query`：根据 `uri` 的查询条件来进行筛选流量。
    * `ip`：根据请求的真实 `ip` 来筛选流量。
    * `host`：根据请求的真实 `host` 来筛选流量。
    * `post`：不建议使用。
    * `cookie`：根据请求的 `cookie` 来筛选流量。
    * `req_method`：根据请求的 `req_method` 来筛选流量。
    * 条件匹配：
      * `match`：模糊匹配，建议和`uri`条件搭配，支持 `restful` 风格的匹配。（`/test/**`）
      * `=`：前后值相等，才能匹配。
      * `regEx`：正则匹配，表示前面一个值去匹配后面的正则表达式。
      * `like`：字符串模糊匹配。
      * `contains`：请求包含指定的值，才能匹配。
      * `SpEl`：`SpEl`表达式匹配。
      * `Groovy`：通过`Groovy`脚本语言匹配。
      * `TimeBefore`：指定时间之前。
      * `TimeAfter`：指定时间之后。
  * 是否开启：打开才会生效。
  * 打印日志：打开时，当匹配上的时候，才会打印匹配日志。
  * 执行顺序：当多个规则的时候，执行顺序小的优先执行。
  * 处理：即`handle`字段，在 [插件处理管理](./plugin-handle-explanation) 中进行设置。每个插件的规则处理不一样，具体请查看每个对应插件的处理。

* 上图表示：当 `uri` 等于  `/http/order/save` 的时候能够匹配上该规则，就会执行该规则中，负载策略是 `random`，重试次数是 `3` 等处理操作。

* 规则建议：可以`uri` 条件， `match` 最真实的`uri路径`，进行流量的最终筛选 。

联合选择器，我们来表述一下：当一个请求的 `uri` 为 `/http/order/save`，会通过 `random` 的方式，转发到 `127.0.0.1:8080` 机器上。

## 条件详解

对选择器和规则中的条件设置再次进行解释。

* `uri` 匹配 （推荐）

  * `uri` 匹配是根据你请求路径中的 `uri` 来进行匹配，在接入网关的时候，前端几乎不用做任何更改。

  * 当使用 `match` 方式匹配时候，同 `springmvc` 模糊匹配原理相同。

  * 在选择器中，推荐使用 `uri` 中的前缀来进行匹配，而在规则中，则使用具体路径来进行匹配。

  * 该匹配方式的时候，在匹配字段名称可以任意填写，匹配字段值需要正确填写。

* `header` 匹配

  * `header` 是根据你的 `http` 请求头中的字段值来匹配。

* `query` 匹配

  * 这个是根据你的 `uri` 中的查询参数来进行匹配，比如 `/test?a=1&b=2` ，那么可以选择该匹配方式。

  * 上述就可以新增一个条件，选取 `query` 方式, `a = 1`。

* `ip`匹配

  * 这个是根据 `http` 调用方的 `ip` 来进行匹配。

  * 尤其是在 `waf` 插件里面，如果发现一个 `ip`地址有攻击，可以新增一条匹配条件，填上该 `ip`，拒绝该 `ip` 的访问。

  * 如果在 `Apache ShenYu` 前面使用了 `nginx` 代理，为了获取正确的 `ip`，可以参考 [自定义解析IP与Host](../../developer/custom-parsing-ip-and-host)

* `host` 匹配

  * 这个是根据 `http` 调用方的 `host` 来进行匹配。

  * 尤其是在 `waf` 插件里面，如果发现一个 `host` 地址有攻击，可以新增一条匹配条件，填上该 `host`，拒绝该 `host` 的访问。

  * 如果在 `Apache ShenYu` 前面使用了 `nginx` 代理，为了获取正确的 `host`，可以参考 [自定义解析IP与Host](../../developer/custom-parsing-ip-and-host)

* `post` 匹配

  * 不推荐使用。

