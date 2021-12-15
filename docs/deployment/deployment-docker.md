---
sidebar_position: 3
title: Docker Deployment
keywords: ["docker", "Deployment"]
description: Docker Deployment
---

This article introduces the use of `docker` to deploy the `Apache ShenYu` gateway.

### Start Apache ShenYu Admin

```
> docker pull apache/shenyu-admin
> docker network create shenyu
```

* use `h2` to store data:

```
> docker run -d -p 9095:9095 --net shenyu apache/shenyu-admin
```

* use `MySQL` to store data, copy `mysql-connector.jar` to `/$(your_work_dir)/ext-lib`：

```
docker run -v /${your_work_dir}/ext-lib:/opt/shenyu-admin/ext-lib -e "SPRING_PROFILES_ACTIVE=mysql" -e "spring.datasource.url=jdbc:mysql://${your_ip_port}/shenyu?useUnicode=true&characterEncoding=utf-8&useSSL=false" -e "spring.datasource.user=${your_username}" -e "spring.datasource.password=${your_password}" -d -p 9095:9095 --net shenyu apache/shenyu-admin
```

another way is to put the `application.yml` configuration in ${your_work_dir}/conf, and then execute the following statement：

```          
docker run -v ${your_work_dir}/conf:/opt/shenyu-admin/conf/ -v /${your_work_dir}/ext-lib:/opt/shenyu-admin/ext-lib -d -p 9095:9095 --net shenyu apache/shenyu-admin
```

### Start Apache ShenYu Bootstrap

```
> docker network create shenyu
> docker pull apache/shenyu-bootstrap
> docker run -d -p 9195:9195 --net shenyu apache/shenyu-bootstrap
```
