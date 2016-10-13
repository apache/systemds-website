---
layout: home
title: Apache SystemML - Declarative Large-Scale Machine Learning
type: Home
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
<!-- ## Apache SystemML

SystemML provides declarative large-scale machine learning (ML) that aims at flexible specification of ML algorithms and automatic generation of hybrid runtime plans ranging from single-node, in-memory computations, to distributed computations on Apache Hadoop and Apache Spark.

### Algorithm Customizability

ML algorithms are expressed in an R-like or Python-like syntax that includes linear algebra primitives, statistical functions, and ML-specific constructs.  This high-level language significantly increases the productivity of data scientists as it provides (1) full flexibility in expressing custom analytics, and (2) data independence from the underlying input formats and physical data representations.  Automatic optimization according to data and cluster characteristics ensures both efficiency and scalability.

**Poisson Nonnegative Matrix Factorization in SystemML's R-like Syntax**
{% highlight r %}
while (iter < max_iterations) {
  iter = iter + 1;
  H = (H * (t(W) %*% (V/(W%*%H)))) / t(colSums(W));
  W = (W * ((V/(W%*%H)) %*% t(H))) / t(rowSums(H));
  obj = as.scalar(colSums(W) %*% rowSums(H)) - sum(V * log(W%*%H));
  print("iter=" + iter + " obj=" + obj);
}
{% endhighlight %}

### Multiple Execution Modes

SystemML computations can be executed in a variety of different modes.  To begin with, SystemML can be operated in Standalone mode on a single machine, allowing data scientists to develop algorithms locally without need of a distributed cluster.  Algorithms can be distributed across Hadoop or Spark.  This flexibility allows the utilization of an organization's existing resources and expertise.  In addition, SystemML can be operated via Java and Scala.  SystemML also features an embedded API for scoring models.

{% highlight sh %}
// Standalone
./bin/systemml test.dml

// Spark
$SPARK_HOME/bin/spark-submit SystemML.jar -f test.dml -exec hybrid_spark

// Hadoop MapReduce
hadoop jar SystemML.jar -f test.dml -exec hybrid
{% endhighlight %}

### Automatic Optimization

Algorithms specified in DML and PyDML are dynamically compiled and optimized based on data and cluster characteristics using rule-based and cost-based optimization techniques.  The optimizer automatically generates hybrid runtime execution plans ranging from in-memory single-node execution to distributed computations on Spark or Hadoop.  This ensures both efficiency and scalability.  Automatic optimization reduces or eliminates the need to hand-tune distributed runtime execution plans and system configurations.
 -->
