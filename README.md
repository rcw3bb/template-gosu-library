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
   
4. **Update** the **group** *(i.e. defaulted to xyz.ronella.gosu)* field in the **build.gradle file** that corresponds to your library.

5. **Replace all** the mentions of **template-gosu-library** to the name of **your library name**.

6. **Update** all the **package names** to have your **library's package structure**.

7. Start coding your library.

   > If you require a library that is not shared from any of the online repositories *(e.g. maven central)*. Place the **jar file** inside the **libs folder**.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## [Build](BUILD.md)

## [Changelog](CHANGELOG.md)

## Author

* Ronaldo Webb
