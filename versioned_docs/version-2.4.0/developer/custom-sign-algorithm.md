---
title: Custom Sign Algorithm
keywords: ["Custom Sign"]
description: specify sign plugins for examination
---

## Description

* Users can customize the signature authentication algorithm to achieve verification.

## Extension

* The default implementation is `org.apache.shenyu.plugin.sign.service.DefaultSignService`.
* Declare a new class named `CustomSignService` and implements  `org.apache.shenyu.plugin.api.SignService`.

```java
 public interface SignService {
 
     /**
      * Sign verify pair.
      *
      * @param exchange   the exchange
      * @return the pair
      */
     Pair<Boolean, String> signVerify(ServerWebExchange exchange);
 }

```

* When returning true in Pair, the sign verification passes. If there's false, the String in Pair will be return to the frontend to show.
* Register defined class as a Spring Bean.

```java
   @Bean
   public SignService customSignService() {
         return new CustomSignService();
   }
```



