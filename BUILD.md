# Build

## Pre-requisite

* Java 11

* [IntelliJ 2021.1.3](https://download.jetbrains.com/idea/ideaIC-2021.1.3.exe)

* Create or update **<USER_HOME>\\.gradle\\gradle.properties** to have the following properties:

    ```properties
    artifactoryUsername=<VALID_ARTIFACTORY_USERNAME>
    artifactoryPassword=<VALID_ARTIFACTORY_PASSWORD>
    archivaUsername=<VALID_ARCHIVA_USERNAME>
    archivaPassword=<VALID_ARCHIVA_PASSWORD>
    ```
    > If you don't have access to my **artifactory** and **archiva** repositories, update all the **repositories section** in the **build.gradle** file **after cloning**, from:
    >
    > ```groovy
    > repositories {
    >     maven {
    >         url 'https://repo.ronella.xyz/artifactory/java-central/'
    >         credentials {
    >             username "${artifactoryUsername}"
    >             password "${artifactoryPassword}"
    >         }
    >         mavenContent {
    >             releasesOnly()
    >         }
    >     }
    >     maven {
    >         url 'https://repo.ronella.xyz/archiva/repository/snapshots/'
    >         credentials {
    >             username "${archivaUsername}"
    >             password "${archivaPassword}"
    >         }
    >         mavenContent {
    >             snapshotsOnly()
    >         }
    >     }
    > }
    > ```
    >
    > to
    >
    > ```groovy
    > repositories {
    > 	mavenCentral()
    > }
    > ```

## Install Gosu Plugin

1. **Open** your **IntelliJ 2021.1.3**.
2. Select **File-> Settings** menu.
3. Click **Plugins**.
4. Click **Marketplace**.
5. Type **OS Gosu**.
6. Click the **Install** button.
7. Click the **Restart IDE** button.
8. Click the **Restart** button.

## Testing

1. In your **IntelliJ**, **open the directory** where you've **cloned repository**.

2. **Open the project structure** by clicking: **File** -> **Project Structure** menu.

3. On the **Project Settings/Project**, ensure that the **Project SDK** is set to **Java 11** and the **Project language level** to **11**.

4. On the **Project Settings/Modules**, ensure that the **Language level** for **main** and **test** are **11**.

5. **Click the OK button** at the bottom.

6. **Find the gradle tab** that is usually on the **right side** and **expand it by clicking it**.

7. Expand the **Tasks folder** -> **verification**.

8. **Double click** the **check** task.

   > All the test must pass.

## Building

> Before doing this you must follows the procedure for testing.
>

1. **Find the gradle tab** that is usually on the **right side** and **expand it by clicking it**.

2. Expand the **Tasks folder** -> **build**.

3. **Double click** the **build** task.

   > The build must pass.

## Packaging

> Before doing this you must follows the procedure for testing.

1. **Find the gradle tab** that is usually on the **right side** and **expand it by clicking it**.

2. Expand the **Tasks folder** -> **build**.

3. **Double click** the **jar** task.

   > The **jar file** will be generated in the **build/libs** directory. The jar file only contains the gosu files. If you want also the **gosu files with compiled classes** you can find it in **build/java-libs** directory.