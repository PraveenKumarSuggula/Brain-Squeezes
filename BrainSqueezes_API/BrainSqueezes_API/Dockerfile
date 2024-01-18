#See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["BrainSqueezes_API/BrainSqueezes_API.csproj", "BrainSqueezes_API/"]
COPY ["core/Core_Models.csproj", "core/"]
COPY ["Service_Layer/Service_Layer.csproj", "Service_Layer/"]
COPY ["Data_Layer/Data_Layer.csproj", "Data_Layer/"]
COPY ["TestCases/TestCases.csproj", "TestCases/"]
RUN dotnet restore "BrainSqueezes_API/BrainSqueezes_API.csproj"
COPY . .
WORKDIR "/src/BrainSqueezes_API"
RUN dotnet build "BrainSqueezes_API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "BrainSqueezes_API.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "BrainSqueezes_API.dll"]