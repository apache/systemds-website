---
layout: page
title: SystemML 0.13.0-incubating Release Notes
description: Project Release Notes
group: nav-right
---
<!--
{% comment %}
Licensed to the Apache Software Foundation (ASF) under one or more
contributor license agreements.  See the NOTICE file distributed with
this work for additional information regarding copyright ownership.
The ASF licenses this file to you under the Apache License, Version 2.0
(the "License"); you may not use this file except in compliance with
the License.  You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
{% endcomment %}
-->
<br/><br/><br/>

The **Apache SystemML 0.13.0-incubating release** was approved on March 2, 2017. It is the fifth release of Apache SystemML since it
became an incubator project on November 2nd, 2015. Updates have been made to the project in several areas, as detailed below.


### New Features and Capabilities
- Updated build for Spark 2.1.0 and Hadoop 2.6.0
- New simplification rewrites for stratstats
- New fused operator tack+* in CP and Spark
- New dmlFromResource capability in Python (equivalent to Scala)
- Add input float support to MLContext
- Versioned documentation

### Experimental Features / Algorithms
- Compressed Linear Algebra v2 (new DDC encoding format, hardened sample-based estimators, debugging tools, new column grouping algorithm, additional operations)

### Various Fixes
* Bug fixes for diverse issues.  See [JIRA release notes](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12319522&version=12339247) for complete list.
