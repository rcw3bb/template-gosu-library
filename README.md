# Gosu Library Template

A basic gradle project for gosu library development.

## Usage

1. **Clone** this repository to your local.

2. **Remove** the **.git folder** from where you've cloned the repository.

3. **Run** the following command:

   ```
   gradlew test
   ```

   > If it completes successfully, your clone is all good. 
   >
   > Visit the **[build](BUILD.md) documentation** if you need the update the **repositories configuration** in **build.gradle file**.
   
4. **Update** the **group** *(i.e. defaulted to xyz.ronella.gosu)* field in the **build.properties file** that corresponds to your library.

5. **Replace all** the mentions of **template-gosu-library** to the name of **your library name**.

6. **Update** all the **package names** to have your **library's package structure**.

7. Start coding your library.


## Dependencies
For some reason that you cannot download a dependency from any of the online repositories *(e.g. maven central or gradle-plugins)*, download its jar file and choose the appropriate directory from the following to place it:

| Directory      | Description                                    |
| -------------- | ---------------------------------------------- |
| ./libs/plugins | The plugins jar files.                         |
| ./libs/main    | The jar files intended for the implementation. |
| ./libs/test    | The jar files intended for the testing.        |

## GS CodeNarc Extension

Part of this template is the usage of the **Gosu Extension for CodeNarc**. 

Run CodeNarc using the following gradle command:

```
gradlew codenarcMainGosu
```

> More on https://github.com/rcw3bb/gs-codenarc-ext

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## [Build](BUILD.md)

## [Changelog](CHANGELOG.md)

## Author

* Ronaldo Webb
