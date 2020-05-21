# Build

## Pre-requisite

* Java 11

* [IntelliJ 2019.3.4](https://download.jetbrains.com/idea/ideaIC-2019.3.4.exe) *(This may require lower version of Java)*

* Create or update **<USER_HOME>\\.gradle\\gradle.properties** to have the following properties:

    ```properties
    artifactoryUsername=<VALID_USERNAME>
    artifactoryPassword=<VALID_PASSWORD>
    ```
    > If you don't have access to my **artifactory**, update all the **repositories section** in the **build.gradle** file **after cloning**, from:
    >
    > ```groovy
    > repositories {
    >        maven {
    >            url 'https://repo.ronella.xyz/artifactory/java-central'
    >            credentials {
    >                username "${artifactoryUsername}"
    >                password "${artifactoryPassword}"
    >            }
    >        }
    >    }
    >    ```
    >    
    >    to
    >    
    >    ```groovy
    >    repositories {
    >  	mavenCentral()
    > }
    >```

## Install Gosu Plugin

1. **Open** your **IntelliJ 2019.3.4**.
2. Select **File-> Settings** menu.
3. Click **Plugins**.
4. Click **Marketplace**.
5. Type **OS Gosu**.
6. Click the **Install** button.
7. Click the **Restart IDE** button.
8. Click the **Restart** button.

## Testing

Run the following command to test the application:

```
gradlew clean check
```

> The preceding command must be run from the location where you've cloned the repository.
>

## Building

Run the following command to build the application:

```
gradlew build
```

> The preceding command must be run from the location where you've cloned the repository.

## Packaging

Run the following command to package the application:

```
gradlew jar
```

> The preceding command must be run from the location where you've cloned the repository.