---
layout: page
title: SystemDS 3.0.0 Release Notes
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

<section class="full-stripe full-stripe--subpage-header clear-header">
  <div class="ml-container ml-container--horizontally-center">
    <div class="col col-12 content-group content-group--center-content content-group--center-align">
      <h1>{{ site.data.project.name }} 3.0.0 Release Notes</h1>
    </div>
  </div>
</section>

<section class="full-stripe full-stripe--alternate">
  <div class="ml-container">
    <div class="col col-12 content-group content-group--medium-bottom-margin" markdown="1">

## Release notes for SystemDS 3.0.0

SystemDS 3.0 is a major release. This is the first release with Java 11 and Spark 3. Release 3.0 contains new features and major improvements to existing features.

The major changes (compared to SystemDS 2.1/2.2) include:
- Federated Backend: Multi-tenancy support with tenants isolation and reuse of intermediates across tenants for federated workers. Compression support for federated workloads. Extended support for the cost-based federated planner, and various robustness and performance improvements.
- Full support for Top-K cleaning framework -- A framework for automatically generating the top-K most effective data cleaning pipelines.
- Initial support for a Unified Memory Manager.
- CUDA code generation and operator fusion [Experimental]
- Robustness and performance improvements for Compressed Linear Algebra.
- Performance and usability improvements for multi-threaded feature transformations.
- Various new built-ins and apply functions for inference workloads.
- Miscellaneous Improvements: Python end-to-end tutorials, improved documentation, and better testing
